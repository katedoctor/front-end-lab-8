var express = require('express'),
    fs = require('fs'),
    router = express.Router(),
    handlers = require('./controllers/handlers');

router.get('/rockstars', handlers.get);
router.get('/rockstars/:id', handlers.getId);
router.post('/rockstars', handlers.post);
router.put('/rockstars/:id', handlers.put);
router.delete('/rockstars/:id', handlers.delete);
module.exports = router;
