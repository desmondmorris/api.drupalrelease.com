'use strict';

var express = require('express');
var Project = require('./lib/project');
var app = express();

app.get('/:project/:version', function(req, res){

  res.setHeader('Content-Type', 'application/json');

  Project.get(req.params.project, req.params.version, function(err, project){
    if (err) {
      res.end('done');
    }
    else {
      res.end(
        JSON.stringify(project.project)
      );
    }
  });

});

var port = Number(process.env.PORT || 3000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
