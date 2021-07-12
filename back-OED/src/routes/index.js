var express = require('express');
var router = express.Router();


//-------------pacj----------//


const productsController = require('../controllers/productsController');



/* GET home page. */
router.get('/inicio', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/', productsController.listar);





module.exports = router;
