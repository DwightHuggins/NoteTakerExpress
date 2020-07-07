// Require Express
const express = require("express");
// Create an Instance of Express Callback
const app = express();
// Add a Port
const PORT = process.env.PORT || 3000;

// Add Data Processing for POST ROUTES.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View / HTML
app.get("/", (req, res) => {
    res.send("Hello World!")
})
// API / JSON

// Listen on that PORT
app.listen(PORT, (req, res) => {
    console.log(`Currently running on http://localhost:${PORT}`);
});

