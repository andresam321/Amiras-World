const mongoose = require("mongoose")


const PictureInfo = new mongoose.Schema(
    {
        image:{
            type:String
        },
        title:{
            type:String
        },

        picInfo:{
            type:String
        },
        
        picLocation:{
            type:String
        },
        datePicWasTaken:{
            type:Date
        },
    

    }, {collection:"users"}, {timestamps:true}

)

const pictureInfo = mongoose.model("PictureInfo", PictureInfo)
module.exports= pictureInfo