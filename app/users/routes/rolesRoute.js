const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/rolesController')

router.post('/', rolesController.createRole)

module.exports=router;
