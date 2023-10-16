const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');

const controllers = require('../controllers/controllers');

router.get('/query1', controllers.query1);
router.get('/query2', controllers.query2);
router.get('/query3', controllers.query3);
router.get('/query4', controllers.query4);

module.exports = router;