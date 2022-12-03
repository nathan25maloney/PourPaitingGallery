const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser')
const mongo = require('mongoose')

const app = express();

var PORT = process.env.PORT || 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

if (PORT === 3005) {
    mongo.connect(
        "mongodb://localhost/pour-painting-gallery", {
            useMongoClient: true
        }
    );
} else {
    mongo.connect(
        "mongodb://localhost/pour-painting-gallery", {
            useMongoClient: true
        }
    );
}



const db = mongo.connection;

// Mongoose Connection Verification


db.once("open", function() {
    console.log("Mongoose connection successful.");
});



app.use(express.static(__dirname + '/dist/pour-painting-gallery'));

app.listen(PORT, function() {
    console.log(`App listening on http://localhost:${PORT}`);
});

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});