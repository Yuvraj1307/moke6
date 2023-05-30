const express=require("express")
const { connection } = require("./config/db")
const { userRout } = require("./routs/userRouts")
const { flightRout } = require("./routs/flightRout")
const { bookingRout } = require("./routs/bookingRout")
const { auth } = require("./middleware/auth")

const app=express()

app.use(express.json())

app.use("/user",userRout)

app.use(auth)

app.use("/flight",flightRout)

app.use("/book",bookingRout)

app.listen(4500,async ()=>{
    try {
        await connection
        console.log("connected to DB AT 4500")
    } catch (error) {
        console.log("can't connect")
        console.log(error)
    }
})