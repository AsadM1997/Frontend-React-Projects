import React from 'react'
import SpecialityMenu from '../components/SpecialityMenu'
import Headers from '../components/Header'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Headers/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>   
      <Footer/> 
    </div>
  )
}

export default Home