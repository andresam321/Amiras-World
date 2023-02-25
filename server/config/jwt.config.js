const jwt = require("jsonwebtoken");
const secret = "secret"
require('dotenv').config();

const authenticate = (req,res,next) =>{
  // const authHeader = req.headers["authorization"]
  // const token = authHeader && authHeader.split(' ')[1]
  // if (token == null)
  //   return res.sendStatus(401)
  jwt.verify(req.cookies.usertoken,process.env.JWT_SECRET,(err,payload)=>{

      if(err){
          res.status(401).json({message:"You do not have access"})
      }else 
      next();
  })
}

// const generateToken = (id) =>{
//     return jwt.sign({id}, secret,{
//         expiresIn:"30d",
//     });
// };
// module.exports.secret = secret;
// module.exports.authenticate = (req, res, next) => {
//   jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
//     if (err) { 
//       res.status(401).json({verified: false});
//     } else {
//       next();
//     }
//   });
// }

module.exports = {
  authenticate
}