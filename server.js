// Require Express
const express = require("express");
// Dependencies
const path = require("path");
// require FS
const fs = require("fs");
//Create instance of express app
const app = express();
//Add port
const PORT = process.env.PORT || 3000;

// Add Data Processing for POST ROUTES.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files in Express-from documenation
app.use(express.static("public"));

// View / HTML Routes
//Get route, homepage HTML sent
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
//Get route, notes HTML Sent
app.get("/notes", (req, res) => {
  res.sendfile(path.join(__dirname, "./public/notes.html"));
});


// API / JSON routes
//Get route


//API/ JSON ROUTES
app.get("/api/notes", function (req, res) {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      return res.send("An error occured reading your data");
    }
    const arrayofNotes = JSON.parse(data);
  });
});
// Post Route
app.post("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      return res.send("An error occured reading your data");
    }
    const arrayOfNotes = JSON.parse(data);
    const note = { ...req.body, id: arrayOfNotes.length };
    arrayofNotes.push(note);

    fs.writeFile(
      "./db/db.json",
      JSON.stringify(arrayOfNotes),
      "utf8",
      (err) => {
        if (err) {
          return res.send("An error occured writing your data");
        }
        res.json(arrayOfNotes);
      }
    );
  });
});
//Catch all for user URL input
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
//Listen on that port
app.listen(PORT, (req, res) => {
    console.log(`Currently running on http://localhost:${PORT}`);
});

//Delete Route
app.delete("/api/notes/:id", function (req, res) {
  //Reading the note object array
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      return res.send("An error occured reading your data");
    }
    const arrayOfNotes = JSON.parse(data);
    console.log(arrayOfNotes);

    //Filter through the data/if id does not match selected one/then gets pushed into new notes array
    const deletedNote = arrayOfNotes.filter(function (note) {
      return note.id != req.params.id;
    });
    
    //Write file/stringifying it/new note appears in db.json file
    fs.writeFile("./db/db.json", JSON.stringify(deletedNote), "utf8", (err) => {
      if (err) {
        return res.send("An error occured writing your data");
      }
      res.json(deletedNote);
    });
  });
});
