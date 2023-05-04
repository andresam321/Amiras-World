import React, {useState, useEffect} from 'react'
import axios from "axios"
import './picture.css'
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
// import './picture.css'
import 'bootstrap/dist/css/bootstrap.min.css';




const DisplayPictures = ({isLoggedIn, setIsLoggedIn}) => {

const [pictures, setPictures] = useState([])
const [data, setData] = useState([])
const navigate = useNavigate();
const [name, setName] = useState()
const [user, setUser] = useState()


useEffect(()=>{
  axios.get("http://localhost:8000/api/uploadedImages", )
  .then((res)=>{
    // console.log(res.data)
    // setPictures(res.data)
    setData(res.data)
  })
  .catch((err)=>{console.log(err)
  
  })
}, [isLoggedIn])

const handleLogout = () =>{
  axios.post("http://localhost:8000/api/user/logout", {withCredentials:true})
  .then((res)=>{
    setUser(null)
    
    navigate('/');

  })
  .catch((err)=> console.log(err))
}
useEffect(()=>{axios.get("http://localhost:8000/api/currentUser", {withCredentials:true})
    .then((res)=>{
      console.log(res)
      console.log(res.data)
      setUser(res.data)
    })
      .catch((err)=>console.log(err))
    
  
  }, [isLoggedIn])
// make a function that will change state depending on what element is chosen


  return (
  
//   <div className=''>
//   {/* {user ? ( */}
//     <div className=''>
//       <h1>Amira's World</h1>
//       {/* WELCOME {user.firstName} */}
//       <NavLink to="/addPicture">Add Picture</NavLink>
//       <button onClick={handleLogout}>Logout</button>
//       </div>
//       {/* ):(
//         <div>
//         <NavLink to="/">Login</NavLink>
//         </div>
//       )}
//        */}
//       {data?.map((obj) => {
//           const base64String = btoa(
//             new Uint8Array(obj.im).reduce(function (data, byte) {
//               return data + String.fromCharCode(byte);
//             }, "")
//           );
//           return (
//         <div className='display'>
//           <div className=''>
//           <p>Title: {obj.name}</p>
//             <img
//               src={`data:image/png;base64,${base64String}`}
//               alt="error"
//               width="500"
//               height="500"
//             />
//             <div className=''>
//             {/* <p>{obj.name}</p> */}
//             <textarea  id="htmlinput">{obj.description}</textarea>
//             <p>Date: {obj.date}</p>
//             </div>
//           </div>
//         </div>
//           );
//         })}
//     </div>
//   )
// }
<div className=''>
{ [data].map((image,index)=> {
  return (
  <div className=''>
     <div key={image._id}>
      <h1>{image.description}</h1>
      <div className= {index === 0 ? "carousel-item active" : "carousel-item"}>
          <img src={image.url} className="d-block w-100" alt="Sunset Over the City"/>
        </div>
     </div>
  </div>
  )
})}

</div>
  )
}
export default DisplayPictures