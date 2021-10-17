var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/newNote', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/newNote', function (req, res, next) {
    models.note.create(req.body)
      .then(newNote => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(newNote));
      })
      .catch(err => {
        res.status(400);
        res.send(err.message);
      });
  });

module.exports = router;