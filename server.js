// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

// Enable CORS to allow cross-origin requests (for development purposes)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Parse JSON bodies
app.use(bodyParser.json());

// Handle form data and image upload
app.post('/upload-event', (req, res) => {
  try {
    const eventData = req.body;
    console.log('Received form data:', eventData);

    // In a real-world scenario, you would store the form data in a database
    // For simplicity, we'll just log the data in the console
    eventData.imageUrl = `https://example.com/${eventData.imageUrl}`;
    res.status(200).json({ message: 'Form data received successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
