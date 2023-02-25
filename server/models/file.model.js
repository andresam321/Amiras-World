const mongoose = require ("mongoose")

const FileUpload = new mongoose.Schema(
    { 
        name: String,
        img: {
          data: Buffer,
          contentType: String,
        },
       description: String,
       date: Date,
        user_id:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"UserSchema"
        }
        



    }, {collection:"fileUpload"}, {timestamps:true}
)
const fileUpload = mongoose.model("FileUpload",FileUpload )
module.exports = fileUpload 