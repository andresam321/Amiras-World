const uploadFile = require("../middleware/upload.middleware");
const fs = require("fs");
const baseUrl = "http://localhost:8080/files/";
const multer = require("multer")
const FileUpload = require("../models/file.model")
const upload = multer({dest: "images/"})
const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env. CLOUD_API_SECRET
})


const uploadImage = async (req,res) =>{
  const image =req.files.image
const {nameOfImage ,description} = req.body
 try {
  const result = await cloudinary.uploader.upload(image.tempFilePath,{
    folder:"amirasImages"
  })
  const product = await FileUpload.create({
    nameOfImage,
    description,
    image:{
      public_id:result.public_id,
      url:result.secure_url
    }
  })
  console.log(product)
  res.status(201).json({
    success: true,
    product
  })
  
 } catch (error) {
  console.log(error)
 }
}

const displayImages = async (req, res, next) => {

  //enable pagination
  const pageSize = 3;
  const page = Number(req.query.pageNumber) || 1;
  const count = await FileUpload.find({}).estimatedDocumentCount();

  //filter
  let category = req.query.category;
  let query = category !== '' ? category : ids;
  try {

      const products = await FileUpload.find({ category: query }).populate('nameOfImage', 'description',"image")
          .skip(pageSize * (page - 1))
          .limit(pageSize)

      res.status(201).json({
          success: true,
          products,
          page,
          pages: Math.ceil(count / pageSize),
          count
      })

  } catch (error) {
      console.log(error);
      next(error);

  }

}


module.exports = {
  uploadImage,
  displayImages
  
};