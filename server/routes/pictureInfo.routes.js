const pictureInfo = require("../controllers/pictureInfo.controller")


module.exports = (app) =>{
    app.get("/api/pictures", pictureInfo.getPictures)
    app.post("/api/pictures", pictureInfo.createPicture)
    app.get("/api/picture/:id",pictureInfo.getPictrueById)
    app.put("/api/picture/:id",pictureInfo.updatePicture)
    app.delete("/api/picture/:id",pictureInfo.deletePicture)
}