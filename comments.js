// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser middleware
app.use(bodyParser.json());

// Create comments object
const comments = {
    "comments": [] // Fix: Initialize comments as an empty array
};

// Add a sample comment
comments.comments.push({
    "id": 1,
    "name": "John",
    "email": ""
});

