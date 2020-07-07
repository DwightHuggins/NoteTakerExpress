// Require Express
const express = require("express");
// Create an Instance of Express Callback
const app = express();
// Add a Port
const PORT = process.env.PORT || 3000;


// Listen on that PORT
app.listen(PORT, (req, res) => {
    console.log(`Currently running on http://localhost:${PORT}`);
});