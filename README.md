# Tic-Tac-Toe (Local)

A simple Tic-Tac-Toe web app you can run locally.

## Prerequisites
- Node.js (v14+)

## Run locally
1. Open PowerShell in the project folder.
2. Install dependencies:

```
npm install
```

3. Start the server:

```
npm start
```

4. Open your browser at: http://localhost:3000

## Run tests

Run unit tests locally with:

```
npm test
```

Continuous integration using GitHub Actions runs the tests on push and pull request (configured in `.github/workflows/nodejs.yml`).

## Docker image (built in CI)

This repository also includes a workflow that builds and pushes a Docker image to GitHub Container Registry (GHCR) on successful tests and pushes to `main`/`master`.

- The image will be published as `ghcr.io/<OWNER>/<REPO>:latest` and `ghcr.io/<OWNER>/<REPO>:<commit-sha>`.

Pull and run the image:

```
# replace OWNER/REPO with your repository, e.g. kishorej/tic-tac-toe
docker pull ghcr.io/OWNER/REPO:latest
docker run -p 3000:3000 ghcr.io/OWNER/REPO:latest
```

> Note: The GitHub Actions workflow uses the repository's `GITHUB_TOKEN` to authenticate to GHCR. You do not need to add extra secrets unless you want to push to a different registry (Docker Hub, etc.).

## Notes
- The app is a single-page static web app served by a small Express server.
- Use `start.ps1` on Windows to run the install and start steps automatically.
