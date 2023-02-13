const express = require('express')
const multer = require('multer')
const dest = multer({ dest: 'images/' })
const DIR = './images/';
const fs = require('fs')
let uuidv4 = require("uuid")
const { default: mongoose } = require('mongoose')
const path = require('path')
const fileInfo = require("../controllers/file.controller")

// const app = express()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, DIR);
  },
  filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, + '-' + fileName)
  }
});
const upload = multer ({storage: storage,
  fileFilter:(req,file,cb) =>{
    if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" ){
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png .jpg and .jpeg format allowed!"))
    }
  }
})
const fileUploader = require("../models/file.model");
module.exports = (app) =>{
  // app.post("/api/upload", upload.single("image"), (req,res,next) =>{
  //   // const url = req.protocol + '://' + req.get("host")
  //   const upload = new fileUploader({
  //     // _id: new mongoose.Types.ObjectId(),
  //     name:req.body.name,
  //     img: {
  //       data: fs.readFileSync(DIR + req.file.filename),
  //       contentType: "image/png",
  //     },
  //   })
  //   upload.save()
  //   .then((res) => {console.log(res,"image saved")
  //   })
  //   .catch((err)=>{console.log(err,"error")
  // })
  //   res.send("image is save")
      
    
  // })
  app.post("/api/upload", upload.single("image"), (req, res) => {
    const saveImage =  fileUploader({
      name: req.body.name,
      description: req.body.description,
      date: req.body.date,
      // title: req.body,
      // description: req.body,
      img: {
        data: fs.readFileSync(DIR + req.file.filename),
        contentType: "image/png",
      },
    });
    console.log(saveImage)
    saveImage
      .save()
      .then((res) => {
        console.log("image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
      res.send('image is saved')
  });


  app.get('/uploaded/images',async (req,res)=>{
    const allData = await fileUploader.find()
    res.json(allData)
  })
// app.use(express.static('./images/')); 
// app.get('/images', express.static('image'));
// app.get("/file/images", fileUploader, fileInfo.getListFiles)
  
}
