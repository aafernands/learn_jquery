// Dependencies
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Set our port to 8080
const PORT = process.env.PORT || 8080;

// expose the static  asset folder
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded()); // parse body for form data type
app.use(bodyParser.json()); // parse body for json data type

// Routes
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "./index.html"));
});

// wild card
// match any url
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./index.html"));
});

// Starts our server
app.listen(PORT, function () {
	console.log("Server is listening on PORT: " + PORT);
});


