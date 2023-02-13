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
        // description:{
        //   type:String,
        //   required:[true,"A title is required"]
        // }
        



    }, {collection:"fileUpload"}, {timestamps:true}
)
const fileUpload = mongoose.model("FileUpload",FileUpload )
module.exports = fileUpload 