const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Simple API endpoint demonstrating handshake
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!', time: new Date().toISOString() });
});

// Fallback for SPA routes (optional)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
