# Deployment

The repository deploys to a DigitalOcean Droplet over SSH through GitHub Actions.

## Required GitHub configuration

Add these repository or production-environment secrets in GitHub:

- `DEPLOY_HOST`: Droplet public IP address or hostname
- `DEPLOY_USER`: SSH user with write access to the web root
- `DEPLOY_PATH`: absolute web root, for example `/var/www/gotcli`
- `DEPLOY_SSH_KEY`: private SSH key for the deploy user
- `DEPLOY_KNOWN_HOSTS`: output of `ssh-keyscan -H <droplet-ip>`

The deploy user must be able to write to `DEPLOY_PATH`. Configure Nginx with [deploy/nginx/gotcli.conf](deploy/nginx/gotcli.conf) on the Droplet.

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
- A validated push to `main` downloads the build artifact and syncs `dist` to the Droplet over SSH.
- Nginx uses `try_files` to rewrite SPA routes to `index.html`.

The production deployment job is protected by the GitHub `production` environment, so environment approval rules can be enabled without changing the workflow.