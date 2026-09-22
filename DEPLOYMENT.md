# Deployment

The repository builds a Docker image, publishes it to Docker Hub, and deploys it to a DigitalOcean Droplet over SSH through GitHub Actions.

## Required GitHub configuration

Add these repository or production-environment secrets in GitHub:

- `DEPLOY_HOST`: Droplet public IP address or hostname
- `DEPLOY_USER`: SSH user with write access to the web root
- `DOCKERHUB_USERNAME`: Docker Hub username or organization
- `DOCKERHUB_TOKEN`: Docker Hub personal access token with **Read & Write** permissions
- `DEPLOY_SSH_KEY`: private SSH key for the deploy user
- `DEPLOY_KNOWN_HOSTS`: output of `ssh-keyscan -H <droplet-ip>`

The deploy user must be allowed to run Docker on the Droplet. Add it to the Docker group and install Docker before the first deployment:

```bash
sudo usermod -aG docker <user>
```

Log in to Docker Hub on the Droplet, so it can pull private images if the repository is private:

```bash
docker login
```

The image contains its own Nginx server and uses [deploy/nginx/gotcli.conf](deploy/nginx/gotcli.conf) for SPA fallback.

## Docker Hub token requirements

`DOCKERHUB_USERNAME` must be the Docker ID that owns `got-web`, not an email address. `DOCKERHUB_TOKEN` must be a Docker Hub access token, not the account password, with `Read & Write` permission. If `got-web` belongs to an organization, the token owner must have permission to push to that organization repository.

Create or verify the repository at `https://hub.docker.com/repositories/${DOCKERHUB_USERNAME}` before running the workflow. A token with `Read-only` permission produces Docker's `401 Unauthorized: access token has insufficient scopes` error during the push step.

Generate a deploy key locally:

```bash
ssh-keygen -t ed25519 -C "got-web-deploy" -f ~/.ssh/got-web-deploy
ssh-copy-id -i ~/.ssh/got-web-deploy.pub <user>@<droplet-ip>
ssh-keyscan -H <droplet-ip>
```

Store the private key contents in `DEPLOY_SSH_KEY` and the `ssh-keyscan` output in `DEPLOY_KNOWN_HOSTS`.

The public key in `DEPLOY_SSH_KEY` must be installed for the exact deploy user:

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
cat got-web-deploy.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Verify the same values locally before rerunning Actions:

```bash
ssh -i ~/.ssh/got-web-deploy <user>@<droplet-ip> 'id && docker version'
```

The `Permission denied (publickey,password)` error means the server rejected the key before the workflow reached Docker. Check that `DEPLOY_USER` is the user whose `authorized_keys` contains the matching public key, and that `DEPLOY_HOST` is the Droplet IP or hostname.

## Workflow

- Pull requests run install, lint, typecheck, and production build.
- Pushes to `main` run the same validation first.
- A validated push to `main` publishes `${DOCKERHUB_USERNAME}/got-web:<commit-sha>` and `latest` to Docker Hub.
- The deploy job pulls the commit-tagged image and replaces the `got-web` container on the Droplet.
- Nginx inside the container uses `try_files` to rewrite SPA routes to `index.html`.

The production deployment job is protected by the GitHub `production` environment, so environment approval rules can be enabled without changing the workflow.