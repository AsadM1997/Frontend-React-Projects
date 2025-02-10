import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const doctors = () => {

  const {speciality}=useParams()
  const  {doctors}= useContext(AppContext)
  console.log(speciality);
  
  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>
        <p>General physician</p>
        <p>Gynecologist</p>
        <p>Dermatologist</p>
        <p>Pediatricians</p>
        <p>neurologist</p>
        <p>Gastroenterologist</p>
        </div>
      </div>
    </div>
  )
} 

export default doctors  