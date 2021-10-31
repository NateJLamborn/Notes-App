var express = require('express');
var router = express.Router();
var models = require('../models')

router.get('/', function(req, res, next) {
    res.send('Note Get');
});

//create a new note
router.post('/new-note', function(req, res, next){
    models.notes
      .findOrCreate({
        where: {
          NoteTitle: req.body.NoteTitle
        },
        defaults: {
          NoteBody: req.body.NoteBody,
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

//get individual note info
router.get('/:id', function(req, res, next){
    let noteId = parseInt(req.params.id);
    models.notes
    .findOne({
      where: {
        NoteId: noteId
      }
    })
    .then(notesFound => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(notesFound));
    })
})

//update a note
router.put('/edit-note/:id', function(req, res, next){
    let noteId = parseInt(req.params.id);
    models.notes
      .update(req.body, { where: { NoteId: noteId } })
      .then(result => res.send("Note edited"))
      .catch(err => {
        res.status(400);
        res.send("There was a problem editing your note.");
      });
  })

//delete a note
router.delete("/delete-note/:id", function (req, res, next) {
    let noteId = parseInt(req.params.id);
    models.notes
      .destroy({
        where: { NoteId: noteId }
      })
      .then(result => res.send("item deleted"))
      .catch(err => { 
        res.status(400); 
        res.send("There was a problem deleting the item. Please make sure you are specifying the correct title."); 
      }
  );
  });

module.exports = router;