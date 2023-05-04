const mongoose = require ("mongoose")

const FileUpload = new mongoose.Schema(
    { 
      nameOfImage:{
        type: String,
      
      },
      image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    
    },
    description: {
      type: String,
      trim: true,
      required : [true, 'Please add a  Description'],
      maxlength: 2000,
  },
    user_id:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"UserSchema"
        }
        



    }, {collection:"fileUpload"}, {timestamps:true}
)
const fileUpload = mongoose.model("FileUpload",FileUpload )
module.exports = fileUpload 