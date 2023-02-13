import React, {useState, useEffect} from 'react'
import axios from "axios"
import './picture.css'
import {NavLink} from 'react-router-dom';
// import './picture.css'
import 'bootstrap/dist/css/bootstrap.min.css';




const DisplayPictures = () => {

const [pictures, setPictures] = useState([])
const [data, setData] = useState([])
const [name, setName] = useState()


useEffect(()=>{
  axios.get("http://localhost:8000/uploaded/images")
  .then((res)=>{
    // console.log(res.data)
    // setPictures(res.data)
    setData(res.data)
  })
  .catch((err)=>{console.log(err)
  
  })
}, [])


  return (
  
  <div className=''>
    <div className=''>
      <h1>Amira's World</h1>
      <NavLink to="/addPicture">Add Picture</NavLink>
      </div>

      {data?.map((obj) => {
          const base64String = btoa(
            new Uint8Array(obj.img.data.data).reduce(function (data, byte) {
              return data + String.fromCharCode(byte);
            }, "")
          );
          return (
        <div className='display'>
          <div className=''>
          <p>Title: {obj.name}</p>
            <img
              src={`data:image/png;base64,${base64String}`}
              alt="error"
              width="500"
              height="500"
            />
            <div className=''>
            {/* <p>{obj.name}</p> */}
            <textarea  id="htmlinput">{obj.description}</textarea>
            <p>Date: {obj.date}</p>
            </div>
          </div>
        </div>
          );
        })}
    </div>
  )
}

export default DisplayPictures