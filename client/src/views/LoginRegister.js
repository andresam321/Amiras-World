import React, {useState} from 'react'
import Login from '../components/Login'
import Register from "../components/Register"
 
// import DisplayLocations from '../components/DisplayLocations'



const Main = () => {


  const[isLoggedIn, setIsloggedIn] = useState(false)
  return (
    <div>

    <Login setIsloggedIn={setIsloggedIn}/>

    <Register/>


    </div>
  )
}

export default Main