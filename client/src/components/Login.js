import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


// import bcrypt from ""

const LogIn = ()=> {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const [error, setErrors] = useState('') 
const navigate = useNavigate();


// useEffect(()=>{axios.post("http://localhost:8000/api/trails/login")
//     .then((res)=>{
//         console.log(res.data)
//         setEmail(res.data)
//         setPassword(res.data)
//     })
//     .catch((err)=>{console.log(err)
//     })



// }, [])

const submitForm = (e)=>{
    e.preventDefault();
    axios.post(`http://localhost:8000/api/user/login`,{email,password},{withCredentials:true})
    .then((res)=>{
        console.log(res);
        console.log(res.data);
        navigate('/viewingPictures');
       // setEmail('');
        // setPassword('');
        // setConfirmPassword('');
       
    }
    )
    .catch((err)=>{
        console.log(err)
        setErrors(err.response.data.message)
    })
}

// function validateForm() {

//     return email.length > 0 && password.length > 0;

//   }

//   function handleSubmit(event) {

//     event.preventDefault();

//   }




    return(
    <body className='trails'>
        <div className='container'>
            <div className='title'>
                <header>
                    
                    <h3>Amiras World</h3>
                </header>
            </div>
            <div className='home'>
                <div>
                    <img className='pictureHome' src='https://skyvector.com/fbo/SQL/rabbit-aviation' alt=''/>
                </div>
                <p>{error?error:""}</p>
            
                <div className='login' >
                    <form className='info' onSubmit={submitForm}>
                        <div className='input'>
                        {
                            error.email?
                                <span>{error.email.message}</span>
                                :null
                        }
                            <label>Email: </label>
                            <input onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                            type='text'
                            name='email'
                            />
                        </div>
                        <div className='input'>
                            <label>Password: </label>
                            <input onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                            type='password'
                            name='password'
                            />
                        </div>
                        <button>Log In</button>
                        <br/>
                        <Link to={'/register'}>Register</Link>
                    </form>
                </div>
            </div>
            
            <footer>
                <p></p>
            </footer>
        </div>
    </body>
    )
}

export default LogIn;