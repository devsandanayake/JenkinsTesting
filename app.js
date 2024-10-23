// Import the express module
const express = require('express');
const app = express();

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// The server listens on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
