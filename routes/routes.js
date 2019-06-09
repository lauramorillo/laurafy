const express = require('express');
const router = express.Router();

const SongsController = require('./songs')

router.get('/songs', SongsController.list)

module.exports = router;