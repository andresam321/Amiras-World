const pictureInfo = require("../models/pictureInfo.model")

module.exports ={
getPictures:(req,res)=>{
    pictureInfo.find({})
    .then((pictures)=>{res.json(pictures)})
    .catch((err)=>{console.log("Error in finding pictures", err)
    res.status(400).json({message:"Something went wrong in finding pictures",err})
 })
},

createPicture:(req,res)=>{
    pictureInfo.create(req.body)
    .then((picture)=>{res.status(201).json(picture)})
    .catch((err)=>{console.log("error in creating pictures", err)
    res.status(400).json({message:"Something went wrong in creating picture "})
 })
},
getPictrueById:(req,res)=>{
    pictureInfo.findOne({_id:req.params.id})
    .then((picture)=>{res.json(picture)})
    .catch((err)=>{console.log("error in getting an picture info")
    res.status(400).json({message:"Something went wrong in finding one picture",err})
 })
},
updatePicture:(req,res)=>{
    pictureInfo.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then((updatePicture)=>res.json(updatePicture))
    .catch((err)=>{console.log("error in updating picture",err)
    })
},
deletePicture:(req,res)=>{
    pictureInfo.findByIdAndDelete({_id:req.params.id})
    .then((deletePicture)=> res.json(deletePicture))
    .catch((err)=>{console.log("error in deelting picture", err)
    })
},




}