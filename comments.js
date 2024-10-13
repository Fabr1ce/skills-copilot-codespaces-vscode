// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Array of comments
const comments = [
  { username: 'Alice', comment: 'I love your website' },
  { username: 'Bob', comment: 'Great job!' }
];

// Get request to return all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Post request to add a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});