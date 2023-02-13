import React, {useState, useEffect} from 'react'
import './picture.css'
import axios from "axios"
import {NavLink, Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'

const AddPicture = () => {

const [image, setImage] = useState('')
const [title, setTitle] = useState('')
const [picInfo, setPicInfo] = useState('')
const [picLocation, setPicLocation] = useState('')
const navigate= useNavigate()
const [datePicWasTaken, setDatePicWasTaken] = useState('')
const [file, setFile] = useState()
const [description, setDescription] = useState("")
const [name, setName] = useState("")
const [date,setDate] = useState(Date)


const submit = async e =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("image", file)
    formData.append("name", name)
    formData.append("description", description)
    formData.append("date", date)
    const result = await axios.post(`http://localhost:8000/api/upload`, 
    formData, name, date, 
    { Headers:{"Content-Type": 'image/png'
    },
        
        // title,
        // picInfo,
        // picLocation,
        // datePicWasTaken
    })
  //  console.log(result.data)
    .then((res)=>{
        console.log(res)
        navigate('/viewingPictures')

    })
    .catch((err=>console.log(err)))
}

return (
  <div>
    <div className="App">
    <h1>Amira's World</h1>
    <NavLink to="/viewingPictures">View Pictures</NavLink>
      <form onSubmit={submit}>
      <div className=''>
        <label>Title:</label>
        <input
          onChange={e => setName(e.target.value)} 
          type="text" />
        </div>
        <div className=''>
        <label>Date picture was taken:</label>
        <input
          onChange={e => setDate(e.target.value)} 
          type="date" />
        </div>
        <div className=''>
        <label>Description:</label>
        <textarea
          onChange={e => setDescription(e.target.value)} 
          type="text" />
        </div>
        <div className=''>
        <input filename={file} 
          onChange={e => setFile(e.target.files[0])} 
          type="file" 
          accept="image/*"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
</div>
  )
}

export default AddPicture