const express = require("express");
const fileupload = require('express-fileupload'); 



const app = express()
const PORT = 8000
const cors = require("cors")
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(cookieParser());
app.use(fileupload({useTempFiles: true}))


require("./config/mongoose.config");
require("./routes/file.routes")(app);
require("./routes/pictureInfo.routes")(app);
require("./routes/user.routes")(app);
require('dotenv').config();

app.listen(PORT,()=> console.log(`Server is up and running on ${PORT}`))