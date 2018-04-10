var express = require('express'),
  fs = require('fs'),
  router = express.Router(),
  handlers = require('./controllers/handlers');

router.get('/rockstars', handlers.get);
router.get('/rockstar/:id', handlers.getId);
router.post('/rockstar', handlers.post);
router.put('/rockstar/:id', handlers.put);
router.delete('/rockstar/:id', handlers.delete);
module.exports = router;
