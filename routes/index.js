const router = require('express').Router();
const cors=require("cors");

  const fun = require('../js/app.js');

  router.get('/', function (req, res) {
    res.status(200).json({ message: 'Conectado al control escolar' })
  });
router.get('/alumno', function(req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  var result = obtener(req.query.nocuenta);
  res.status(200).json({ datos : result });
})
router.post('/',cors() ,function(req, res) {
  fun.agregarp(req)
  res.json({ message: 'Alumno agregado con exito' })
})

  module.exports = router;