import axios from 'axios';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const Register= ({isLoggedIn,setIsLoggedIn}) =>{
    const [firstName, setFirstName]= useState('');
    // const [user, setUser] = useState({
    //     firstName: "",
    //     lastName:"",
    //     email:"",
    //     password:"",
    //     confirmPassword:""
    // })
    const [lastName, setLastName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');
    const [errors,setErrors] = useState({})
    const [key, setKey] = useState()
    const [whoAreYou, setWhoAreYou] = useState("")
    // const [age, setAge]= useState('');
    const navigate = useNavigate();
 
    const submitForm = (e)=>{
        e.preventDefault();
        axios.post(`http://localhost:8000/api/user/register`,{firstName,lastName,email,password,confirmPassword,whoAreYou,})
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setIsLoggedIn(true)
            // setUser("")
            navigate('/');
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setWhoAreYou("")
            setConfirmPassword('');
            // setAge('');
            setErrors({})
            navigate('/viewingPictures')

        })
        .catch(err=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }
    // const handleChange = (e) =>{
    //     setUser({
    //         ...user,
    //         [e.target.name]: e.target.value
    //     })
    // }



    return(
        <div className="container">
    
            <div className="title">
                <header>
                    <h1>Registration</h1>
                </header>
                <Link to={'/'}>Return to Log In</Link>
            </div>

            <div className="register">
                <form className="info" onSubmit={submitForm}>
                    <div className="input">
                        <label>First Name: </label>
                        <input onChange={(e)=>setFirstName(e.target.value)}
                        value={firstName}
                        name='firstName'
                        type='text'
                        />
                    </div>
                    <div className="input">
                        <label>Last Name: </label>
                        <input onChange={(e)=>setLastName(e.target.value)}
                        value={lastName}
                        name='lastName'
                        type='text'
                        />
                    </div>
                    <div className="input">
                        <label>Ask Dad for key:</label>
                        <input onChange={(e)=>setWhoAreYou(e.target.value)}
                        value={whoAreYou}
                        name='whoAreYou'
                        type='text'
                        />
                        {/* <input onChange={(e)=>setAllInfo(e.target.value)} value={mom} name='mom' type='text'
                        />
                        <input onChange={(e)=>setGrandparent(e.target.value)}
                        value={grandparent}
                        name='grandparent'
                        type='text'
                        />
                        <input onChange={(e)=>setUncle(e.target.value)}
                        value={uncle}
                        name='uncle'
                        type='text'
                        />
                        <input onChange={(e)=>setAunt(e.target.value)}
                        value={aunt}
                        name='aunt'
                        type='text'
                        />
                        <input onChange={(e)=>setCousin(e.target.value)}
                        value={cousin}
                        name='cousin'
                        type='text'
                        /> */}
                    </div>
                    <div className="input">
                        <label>Email: </label>
                        <input onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        name='email'
                        type='text'
                        />
                    </div>
                    <div className="input">
                        <label>Password: </label>
                        <input onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                        name='password'
                        type='password'
                        />
                    </div>
                    <div className="input">
                        <label>Confirm Password: </label>
                        <input onChange={(e)=>setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        name='confirmPassword'
                        type='password'
                        placeholder='Enter Confirm Password'
                        />
                    </div>
                    <button>Submit</button>
                </form>
                </div>
                <div>
                    <img className="registerPic" src="" alt=""/>
                </div>
                <footer>
                    <p></p>
                </footer>
            
        </div>
    )
}

export default Register;