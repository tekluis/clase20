const path = require('path');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(path.join(__dirname,'/../views/index.ejs'));
});


router.get('/detalle/:id', function(req, res, next) {
  switch(req.params.id) {
    case '1': 
      res.render(path.join(__dirname,'/../views/Carpaccio.ejs'));
      break;
    case '2': 
      res.render(path.join(__dirname,'/../views/Risotto.ejs'));
      break;
    case '3': 
      res.render(path.join(__dirname,'/../views/Mousse.ejs'));
      break;
    case '4': 
      res.render(path.join(__dirname,'/../views/Esparragos.ejs'));
      break;
  }
});

/*
router.get('/detalle/:id', function(req, res, next) {
  if (req.params.id == 1) {res.render(path.join(__dirname,'/../views/Carpaccio.ejs'));}
  if (req.params.id == 2) {res.render(path.join(__dirname,'/../views/Risotto.ejs'));}
  if (req.params.id == 3) {res.render(path.join(__dirname,'/../views/Mousse.ejs'));}
  if (req.params.id == 4) {res.render(path.join(__dirname,'/../views/Esparragos.ejs'));}
})
*/

module.exports = router;
