var express = require('express'),
    router = express.Router(),
    handlers = require('./controllers/handlers');

router.get('/rockstars', handlers.get);
router.get('/rockstars/:id', handlers.getId);
router.get('/rockstars', handlers.post);
router.get('/rockstars/:id', handlers.put);
router.get('/rockstars/:id', handlers.delete);
module.exports = router;
