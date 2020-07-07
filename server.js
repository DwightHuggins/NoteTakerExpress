// Require Express
const express = require("express");
// Dependencies
const path = require("path");
// require FS
const fs = require("fs");
//Create instance of express app
const app =express();
//Add port
const PORT =process.env.PORT || 3000;

// Add Data Processing for POST ROUTES.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files in Express-from documenation
app.use(express.static('public'));

// View / HTML Routes
//Get route, homepage HTML sent
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});
//Get route, notes HTML Sent
app.get("/notes", (req, res) => {
   res.sendfile(path.join(__dirname,"./public/notes.html"));
});


// API / JSON routes
//Get route


