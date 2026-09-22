# Deployment

The repository builds a Docker image, publishes it to Docker Hub, and deploys it to a DigitalOcean Droplet over SSH through GitHub Actions.

## Required GitHub configuration

Add these repository or production-environment secrets in GitHub:

- `DEPLOY_HOST`: Droplet public IP address or hostname
- `DEPLOY_USER`: SSH user with write access to the web root
- `DOCKERHUB_USERNAME`: Docker Hub username or organization
- `DOCKERHUB_TOKEN`: Docker Hub access token with push permission
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

Generate a deploy key locally:

```bash
ssh-keygen -t ed25519 -C "got-web-deploy" -f ~/.ssh/got-web-deploy
ssh-copy-id -i ~/.ssh/got-web-deploy.pub <user>@<droplet-ip>
ssh-keyscan -H <droplet-ip>
```

Store the private key contents in `DEPLOY_SSH_KEY` and the `ssh-keyscan` output in `DEPLOY_KNOWN_HOSTS`.

## Workflow

- Pull requests run install, lint, typecheck, and production build.
- Pushes to `main` run the same validation first.
- A validated push to `main` publishes `${DOCKERHUB_USERNAME}/got-web:<commit-sha>` and `latest` to Docker Hub.
- The deploy job pulls the commit-tagged image and replaces the `got-web` container on the Droplet.
- Nginx inside the container uses `try_files` to rewrite SPA routes to `index.html`.

The production deployment job is protected by the GitHub `production` environment, so environment approval rules can be enabled without changing the workflow.