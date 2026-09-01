const express = require('express');
const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'password';

app.use(express.json());
app.use(cors());

const DATA_FILE = process.env.DATA_FILE || path.join(__dirname, 'data', 'submissions.json');

async function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  await fsPromises.mkdir(dir, { recursive: true });
  try {
    await fsPromises.access(DATA_FILE);
  } catch (e) {
    await fsPromises.writeFile(DATA_FILE, '[]', 'utf8');
  }
}

function basicAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Basic ')) return unauthorized(res);
  const b64 = auth.slice(6);
  let decoded = '';
  try {
    decoded = Buffer.from(b64, 'base64').toString('utf8');
  } catch (e) {
    return unauthorized(res);
  }
  const idx = decoded.indexOf(':');
  if (idx < 0) return unauthorized(res);
  const user = decoded.slice(0, idx);
  const pass = decoded.slice(idx + 1);
  if (user === ADMIN_USER && pass === ADMIN_PASS) return next();
  return unauthorized(res);

  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm="Admin Area"');
    return res.status(401).send('Unauthorized');
  }
}

// Simple status endpoint
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Echo endpoint for testing POST requests
app.post('/api/echo', (req, res) => {
  res.json({ received: req.body });
});

// Contact endpoint - saves submissions to a JSON file
app.post('/api/contact', async (req, res) => {
  try {
    await ensureDataFile();
    const body = req.body || {};
    const entry = Object.assign({}, body, { receivedAt: new Date().toISOString() });
    const raw = await fsPromises.readFile(DATA_FILE, 'utf8');
    const arr = JSON.parse(raw || '[]');
    arr.push(entry);
    await fsPromises.writeFile(DATA_FILE, JSON.stringify(arr, null, 2), 'utf8');
    res.json({ ok: true, saved: entry });
  } catch (err) {
    console.error('Failed to save contact submission', err);
    res.status(500).json({ ok: false, error: 'failed to save' });
  }
});

// Return saved submissions
app.get('/api/submissions', basicAuth, async (req, res) => {
  try {
    await ensureDataFile();
    const raw = await fsPromises.readFile(DATA_FILE, 'utf8');
    const arr = JSON.parse(raw || '[]');
    res.json({ ok: true, submissions: arr });
  } catch (err) {
    console.error('Failed to read submissions', err);
    res.status(500).json({ ok: false, error: 'failed to read submissions' });
  }
});

// Protect admin static files
app.get('/admin.html', basicAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});
app.get('/admin.js', basicAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.js'));
});

// Serve static frontend files from the project root (after protected routes)
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
