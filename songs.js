var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listSongs', function (req, res) {
   fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var song = {
    "song6" : {
        "song" : "DON'T MATTER",
        "artist" : "AKON",
        "genre" : "Reggae, R&B/Soul, Pop, Hip-Hop/Rap, Afrobeats",
        "link": "https://www.youtube.com/watch?v=JWA5hJl4Dv0",
        "id": "6"
    }
 }
 
 app.post('/addSongs', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["song6"] = song["song6"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

 app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["song" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })

 var id = 2;

app.delete('/deleteSongs', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["song" + 2];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})