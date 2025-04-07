import React, { useState } from 'react'
import  {assets} from '../../assets/assets'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  
  const [menu,setMenu]=useState("home")
    
  return (
    <div className='navbar'>
        <img src={assets.logo} alt='' className='logo'/>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu('home')} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download'onClick={()=>setMenu('mobile-app')} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu('Contact-us')} className={menu==="Contact-us"?"active":""}>Contact-us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon}/>
            <div className='navbar-search-icon'>
                    <img src={assets.basket_icon}/>   
                    <div className='dot'></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar