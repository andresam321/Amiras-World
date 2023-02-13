const User = require("../models/user.model")
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
// const { secret } = require("../config/jwt.config");



module.exports = {


getUsers:(req,res)=>{
User.find({})
    .then((user)=>{res.json(user)})
    .catch((err)=>{console.log("Error in finding airport inputs", err)
     res.status(400).json({message:"Something went wrong in finding airports inputs",err})
    })
},




register: (req, res) => {
    User.create(req.body)
    .then(user => {
    const userToken = jwt.sign({
        id: user._id
        }, process.env.SECRET_KEY);
        console.log("success")
        res.cookie("usertoken", userToken, process.env.SECRET_KEY, {
                      httpOnly: true
        })
        console.log("success")
        console.log(user)
        .json({ msg: "success!", user: user });
        console.log(user)
        })
        .catch(err =>res.json(err));
          
      },



// register: (req, res)=>{
//     const newUser = new User(req.body);
//     console.log(newUser);

//     newUser.save()
//         .then(()=>{
//             console.log('successful registration');
//             res.json({
//                 message: 'Successfully Registered',
//                 user: newUser,
//             })
//             console.log("user has been save")

//         }).catch((err)=>res.status(400).json(err))
// },

// login: async(req, res) => {
//     const user = await User.findOne({ email: req.body.email });
     
//     if(user === null) {
//             // email not found in users collection
//     return res.sendStatus(400);
//     }
     
//         // if we made it this far, we found a user with this email address
//         // let's compare the supplied password to the hashed password in the database
//     const correctPassword = await bcrypt.compare(req.body.password, user.password);
     
//     if(!correctPassword) {
//             // password wasn't a match!
//     return res.sendStatus(400);
//     }
     
//         // if we made it this far, the password was correct
//     const userToken = jwt.sign({
//     id: user._id
//     }, process.env.SECRET_KEY);
     
//         // note that the response object allows chained calls to cookie and json
//     res.cookie("usertoken", userToken, secret, {httpOnly: true})  
//     .json({ msg: "Login successful!",
//      userLoggedIn: {
//         user: `${user.firstName}`
//      }
//     })
    
// },




logout: (req, res) => {
    console.log("logging out")
    res.clearCookie('usertoken');
    res.sendStatus(200);
    console.log("sucessfully logged out")
    
},


getLoggedInUser:(req,res) =>{
    const decodedJWT = jwt.decode(req.cookies.usertoken, {complete:true});
    User.findById(decodedJWT.payload._id)
    .then(user =>res.json(user))
    // console.log("user in session")
    .catch(err => res.json(err))
},


logIn: (req, res)=> {
    User.findOne({email: req.body.email})
    .then((user)=>{
        if(user === null){
        res.status(400).json({message:'Invalid Login'})
        } else{
            bcrypt.compare(req.body.password, user.password)
                .then((isPasswordValid)=>{
                    if(isPasswordValid === true) {
                        console.log('Correct Password');
                        res.cookie('usertoken', 
                        jwt.sign({
                            _id: user._id,
                            // username: user.username,
                            // email: user.email,
                        },
                        process.env.SECRET_KEY),
                        {
                            httpOnly: true,
                            expires: new Date(Date.now() + 90000000000)
                        })
                        .json({
                            message: 'Successful Log in',
                            userLoggedIn: {
                                firstName: `${user.firstName}${user.lastName}`
                            }
                        })

                    }else{
                        res.status(400).json({message:"Invalid Login"})
                    }
                })
                .catch((err)=>{
                    res.status(400).json({message:"Invalid Login",err})
                })
        }
    })
    .catch((err)=>{
        res.status(400).json({message:"Invalid Login",err})
    })
},
}