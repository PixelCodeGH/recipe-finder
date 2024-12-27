const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Recipe Finder API' });
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

const PORT = 3001;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
  console.log(`Try accessing:`);
  console.log(`1. http://localhost:${PORT}`);
  console.log(`2. http://127.0.0.1:${PORT}`);
}); 