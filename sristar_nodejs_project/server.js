const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public
app.use(express.static(path.join(__dirname, 'public')));

// Fallback route to serve index.html for single-page apps or direct access
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sristar', 'home.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}. Open http://localhost:${PORT}`);
});
