import React from 'react'
import { useParams } from 'react-router-dom'

const Doctor = () => {
  const {speciality}= useParams()
  console.log(speciality);
  
  return (
    <div>Doctor</div>
  )
}

export default Doctor