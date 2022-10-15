var express = require('express');
var router = express.Router();

router.post('/', function(req, res, _) {
  
  let suma1 = req.body.suma1
  let suma2 = req.body.suma2
  let suma3 = req.body.suma3
  let suma4 = req.body.suma4
  let suma5 = req.body.suma5
  let suma6 = req.body.suma6
  let suma7 = req.body.suma7
  let suma8 = req.body.suma8
  let st=0
  if(suma1 >0 ||suma2>0 || suma3 >0 ||suma4>0 ||suma5>0||suma6>0||suma7>0||suma8>0){
      st=suma1*17700
      st=st +suma2*2700
      st=st +suma3*1490
      st=st +suma4*5990
      st=st +suma5*3190
      st=st +suma6*2289
      st=st +suma7*2400
      st=st +suma8*2287
    }
  else{
    st=0
  }
 
  
  res.status(200).json({st:st})
});

module.exports = router;