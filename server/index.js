const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const dataPath = path.join(__dirname, 'data');
const userFile = path.join(dataPath, 'users.json');

// Ensure data directory exists
if (!fs.existsSync(dataPath)) {
  fs.mkdirSync(dataPath, { recursive: true });
}

// Helper to read users
function readUsers() {
  if (!fs.existsSync(userFile)) return [];
  const raw = fs.readFileSync(userFile);
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

// Helper to write users
function writeUsers(users) {
  fs.writeFileSync(userFile, JSON.stringify(users, null, 2));
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const users = readUsers();
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'User already exists' });
  }
  users.push({ name, email, password });
  writeUsers(users);
  res.json({ message: 'Signup successful' });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const users = readUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  res.json({ message: 'Login successful', name: user.name, email: user.email });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
