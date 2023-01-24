const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/chart', (req, res) => {
    res.sendFile(path.join(__dirname,'src', 'index.html'));
});

module.exports = {
  router: router
};