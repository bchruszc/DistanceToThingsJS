// Module dependencies.
var express = require('express');

function startServer() {
    
    var app = express();
    console.log("Starting server")
    
    //set path to the views (template) directory
    app.set('views', __dirname + '/views');
    //set path to static files
    app.use(express.static(__dirname + '/public'));
    //handle GET requests on /
    app.get('/', function(req, res){res.render('index.jade', {title: 'Brad Rocks'});});

    app.listen(process.env.PORT, process.env.IP);
}

exports.startServer = startServer;