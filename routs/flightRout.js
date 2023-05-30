const express = require("express");
const { flightModel } = require("../model/flightModel");

const flightRout = express.Router();


flightRout.get("/api/flights",async (req,res)=>{
    try {
        let flights=await flightModel.find()
        console.log(flights)
           res.status(200).send({msg:"these are all flights",flights})
        
    } catch (error) {
        console.log(error)
        res.status(404).send({msg:"flight not found"})
    }
})


flightRout.get("/api/flights/:id",async (req,res)=>{

    let id=req.params.id
    try {
        let flights=await flightModel.findOne({_id:id})

        console.log(flights)
           res.status(200).send({msg:"here is your flight",flights})
        
    } catch (error) {
        console.log(error)
        res.status(404).send({msg:"flight not found"})
    }
})


flightRout.post("/api/flights", async (req, res) => {
  let  data = req.body;
  try {
     let flight=new flightModel(data)
     await flight.save()
     console.log(flight)
     res.status(201).send({msg:"flight is added",flight})

  } catch (error) {
    console.log(error)
    res.status(404).send({msg:"can't add flight"})
  }
});


flightRout.patch("/api/flights/:id",async (req,res)=>{

    let id=req.params.id
    let data=req.body
    try {
        let flights=await flightModel.findOneAndUpdate({_id:id},data)

        console.log(flights)
           res.status(204).send({msg:"flight is updated"})
        
    } catch (error) {
        console.log(error)
        res.status(404).send({msg:"flight not found"})
    }
})


flightRout.delete("/api/flights/:id",async (req,res)=>{

    let id=req.params.id
     try {
        let flights=await flightModel.findByIdAndRemove({_id:id})

        console.log(flights)
           res.status(202).send({msg:"flight is deleted"})
        
    } catch (error) {
        console.log(error)
        res.status(404).send({msg:"flight not found"})
    }
})


module.exports={
    flightRout
}
