var express = require('express');

var router = express.Router();

let b=6
router.post('/', function(req, res, _) {
  //llamar los datos enviados desde frontend , con el nombre seleccionado en frontend
  let suma1 = req.body.suma1
  let suma2 = req.body.suma2
  let suma3 = req.body.suma3
  let suma4 = req.body.suma4
  let suma5 = req.body.suma5
  let suma6 = req.body.suma6
  let suma7 = req.body.suma7
  let suma8 = req.body.suma8
  let suma9 = req.body.suma9
  let suma10 = req.body.suma10
  let suma11 = req.body.suma11
  let st=0
  
  //ver si alguna cantidad es mayor a 0
  if(suma1 >0 ||suma2>0 || suma3 >0 ||suma4>0 ||suma5>0||suma6>0||suma7>0||suma8>0||suma9>0||suma10>0||suma11>0){
      //si alguna cantidad es mayor a 0 se empesara a guardar en el valor st el resultado de las siguientes operaciones
      st=suma1*17700//cada st se sumara con el resultado de la multiplicacion entre la cantidad seleccionada con su respectivo precio , y este resultado se guardara en st
      st=st +suma2*2700
      st=st +suma3*2700
      st=st +suma4*5990
      st=st +suma5*3190
      st=st +suma6*2289
      st=st +suma7*1490
      st=st +suma8*2400
      st=st +suma9*2287
      st=st +suma10*2990
      st=st +suma11*1490
    }
  else{
    st=0
  }
  
  res.status(200).json({st:st}) //se devuelve el valor de st
});

module.exports = router;