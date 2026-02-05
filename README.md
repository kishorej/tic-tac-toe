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

## Notes
- The app is a single-page static web app served by a small Express server.
- Use `start.ps1` on Windows to run the install and start steps automatically.
