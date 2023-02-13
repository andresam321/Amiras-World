const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/amirasWorld"

mongoose.connect(mongoURI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> console.log(`connected to the db ${mongoURI}`))
.catch((err)=> console.log("Error in connecting to DB", err))