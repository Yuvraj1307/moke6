const express = require("express");
const { userModel } = require("../model/userModel");
const userRout = express.Router();
var jwt = require('jsonwebtoken');
userRout.post("/api/register", async (req, res) => {
  let { name, email, password } = req.body;
  try {
     let user=new userModel({name,email,password})
     await user.save()
     console.log(user)
     res.status(201).send({msg:"user is added",user})

  } catch (error) {
    console.log(error)
    res.status(404).send({msg:"can't rejister"})
  }
});


userRout.post("/api/login", async (req, res) => {
    let {email, password } = req.body;
    try {
       let user= await userModel.findOne({email,password})
         if(!user){
            return res.send({msg:"please register first"})
         }


        console.log(user)
        var token = jwt.sign({ userid: user._id}, 'masai');


       res.status(201).send({msg:"login success ful",user,token})
  
    } catch (error) {
      console.log(error)
      res.status(404).send({msg:"can't rejister"})
    }
  });


module.exports={
    userRout
}
