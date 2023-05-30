const express = require("express");
const { bookingmodel } = require("../model/bookingModel");

const bookingRout = express.Router();

bookingRout.post("/api/booking", async (req, res) => {
  let { user, flight } = req.body;
  try {
    let booking = new bookingmodel({ user, flight });
    await booking.save();
    console.log(booking);
    res.status(201).send({ msg: "flight is booked", booking });
  } catch (error) {
    console.log(error);
    res.status(404).send({ msg: "can't book" });
  }
});

bookingRout.get("/api/dashboard", async (req, res) => {
    let {user,flight}=req.body
    try {
        let data=await bookingmodel.find().populate("user").populate("flight")
        console.log(data)
        res.status(200).send({mag:"here is data",data})
    } catch (error) {
        console.log(error);
    res.status(404).send({ msg: "can't find" });
    }
})

module.exports = {
  bookingRout,
};
