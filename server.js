// Require Express
const express = require("express");

const path = require("path");

// Create an Instance of Express Callback
const app = express();

// Add a Port
const PORT = process.env.PORT || 3000;

// Add Data Processing for POST ROUTES.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// View / HTML
app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/notes", (req, res) => {
    return res.sendFile(path.join(__dirnname, "./public/index.html"));
});

// API / JSON

// Listen on that PORT
app.listen(PORT, (req, res) =>{
    console.log(`Currently running on http://localhost:${PORT}`)
});

