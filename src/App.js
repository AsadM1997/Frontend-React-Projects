import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div >
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/doctors' element={<Doctor/>}></Route>
        <Route path='/doctors/:speaciality' element={<Doctor/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/MyProfile' element={<MyProfile/>}></Route>
        <Route path='/MyAppointment' element={<MyAppointment/>}></Route>
        <Route path='/MyAppointment/:docId'element={<Appointment/>}></Route>
        
      </Routes>
    </div>
  )
}

export default App