import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {

  const {speciality}=useParams()
  console.log("Speciality:",speciality);

  const {doctors}= useContext(AppContext)
  
  return (
    <div>
            <h1>{speciality ? `Doctors specialized in ${speciality}` : 'All Doctors'}</h1>
            <p>Browse through  the doctors specialist.</p>
            <div>
              <div>
                <p>General physician</p>
                <p>Gynecologist</p>
                <p>Dermatologist</p>
                <p>Pediatricians</p>
                <p>Neurologist</p>
                <p>Gastroenterologist</p>
              </div>
            </div>

    </div>
  )
}

export default Doctors