var express = require('express');
var router = express.Router();
const CtrlMain = require('../Controllers/main');
/* GET home page. */
router.get('/',CtrlMain.index);

module.exports = router;