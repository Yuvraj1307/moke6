var jwt = require('jsonwebtoken');


const auth=(req,res,next)=>{
    let token=req.headers.authorization
    if(!token){
        return res.status(404).send({msg:"please login forst"})
    }

    jwt.verify(token, 'masai', function(err, decoded) {
        req.body.userid=decoded.userid // bar
        next()
      });

}

module.exports={auth}