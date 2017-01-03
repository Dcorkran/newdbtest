var express = require('express');
var router = express.Router();
var queryFunctions = require('../db/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dillon & Friends :-)' });
});

router.post('/', function(req,res,next){
  if(queryFunctions.comparePassword(req.body)){
    queryFunctions.postNewUser(req.body);
    res.json(req.body);
  }else{
    console.log("passwords don't match");
    res.json(`passwords don't match`);
  }
});

module.exports = router;
