
import React from 'react'
import Speciality_Menu from '../components/speciality_Menu'
import Headers from '../components/Header'
import TopDoctors from '../components/TopDoctors'

const Home = () => {
  return (
    <div>
      <Headers/>
      <Speciality_Menu/>
      <TopDoctors/>
    </div>
  )
}

export default Home