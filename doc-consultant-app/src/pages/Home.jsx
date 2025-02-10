import React from 'react'
import Speciality_Menu from '../components/SpecialityMenu'
import Headers from '../components/Header'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Headers/>
      <Speciality_Menu/>
      <TopDoctors/>
      <Banner/>   
      <Footer/> 
    </div>
  )
}

export default Home