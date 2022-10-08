var express = require('express');
var router = express.Router();

router.post('/', function(req, res, _) {
  
  let suma1 = req.body.suma1
  let suma2 = req.body.suma2
  let suma3 = req.body.suma3
  let suma4 = req.body.suma4
  let suma5 = req.body.suma5
  let st=0
  if(suma1 >0 ||suma2>0 || suma3 >0 ||suma4>0 ||suma5>0){
      st=suma1*1000
      st=st +suma2*2000
      st=st +suma3*3000
      st=st +suma4*4000
      st=st +suma5*5000
    }
  else{
    st=0
  }
 
  
  res.status(200).json({st:st})
});

module.exports = router;