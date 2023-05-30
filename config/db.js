const mongoose=require("mongoose")

const connection=mongoose.connect(`mongodb+srv://yuvraj:yuvraj@cluster0.hhjiny0.mongodb.net/s3moke6?retryWrites=true&w=majority`)

module.exports={
    connection
}