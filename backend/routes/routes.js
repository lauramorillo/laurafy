const express = require('express');
const router = express.Router();

const SongsController = require('./songs');

router.get('/songs', SongsController.list);
router.post('/upload', SongsController.upload);

module.exports = router;