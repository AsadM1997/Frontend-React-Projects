import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from "react-router-dom";


const Speciality_Menu = () => {
  return (
    <div id='#speciality' className='flex flex-col items-center gap-4 py-16  text-gray-800'>
        <h1 className='text-3xl font-medium'>Find by speciality</h1>
        <p className='sm:w-1/3 text-center text-sm ' >  simply browse through our extensive list of trusted doctors schedule your appointment hassle-free.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full  overflow-scroll'>
            {specialityData.map((item,index)=>(
              <Link key={index} >
            <img className='w-16 sm:w-24 mb-2' src={item.image || "/default-doctor.jpg"} alt={`${item.speciality} doctor`} />
               <p>{item.speciality}</p>
            </Link>

            ))}
        </div>
    </div>
  )
}

export default Speciality_Menu
