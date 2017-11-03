var express = require('express');
var router = express.Router();
var request = require('request');
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  res.sendFile('index.html', {root: 'public' });
});

router.get('/posts', function(req, res) {

});

module.exports = router;
