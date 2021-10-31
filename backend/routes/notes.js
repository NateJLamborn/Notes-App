var express = require('express');
var router = express.Router();
var models = require('../models')

router.get('/', function(req, res, next) {
    res.send('Note Get');
});

router.get('/new-note', function(req, res, next){
    res.render('NewNote', {})
    res.send('New Note Get')
});

router.post('/new-note', function(req, res, next){
    models.notes
      .findOrCreate({
        where: {
          NoteTitle: req.body.notetitle
        },
        defaults: {
          NoteBody: req.body.notebody,
        }
      })
      .spread(function (result, created) {
        if (created) {
          res.send('Note created');
        } else {
          res.send('Note not created');
        }
      });
})

module.exports = router;