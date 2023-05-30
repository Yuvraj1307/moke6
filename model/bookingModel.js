const mongoose=require("mongoose")

const bookingSchema=mongoose.Schema({
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    flight : { type: mongoose.Schema.Types.ObjectId, ref: 'Flight' }
})

const bookingmodel=mongoose.model("book",bookingSchema)

module.exports={
    bookingmodel
}