# Travel Website — Backend

This adds a minimal Node.js + Express backend to serve the existing frontend files and provide a couple of small API endpoints for testing.

Quick start

1. Install dependencies:

```bash
npm install
```

2. Run the server:

```bash
npm start
```

By default the server listens on port `3000`. Open http://localhost:3000 to view the frontend. API endpoints:

- `GET /api/status` — returns a JSON health object
- `POST /api/echo` — echoes the JSON body back
 - `POST /api/contact` — accepts a JSON body (e.g. `name`, `email`, `message`) and saves submissions to `data/submissions.json`

Environment

You can configure the server with a `.env` file. See `.env.example` for variables:

- `PORT` — server port
- `DATA_FILE` — path to save contact submissions

Notes

- CORS is enabled so the frontend can call the API from the same host or another origin during development.
- Run `npm install` before starting to ensure `express`, `cors`, and `dotenv` are installed.

Admin UI

You can view saved submissions in the browser at `/admin.html`. The page fetches `GET /api/submissions` and renders a simple table.

Authentication

The admin page and the submissions API are protected with HTTP Basic Auth. Configure credentials via environment variables (create a `.env` file from `.env.example`):

- `ADMIN_USER` — admin username
- `ADMIN_PASS` — admin password

When a protected page or endpoint is accessed, the browser will prompt for the username and password.
