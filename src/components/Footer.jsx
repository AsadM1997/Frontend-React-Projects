import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* ----Left section----- */}
            <div>
            <img className='mb-5 w-40' src={assets.logo} alt=''/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto is a powerful and user-friendly application designed to revolutionize the way prescriptions are managed. By seamlessly bridging the gap between healthcare providers, pharmacies, and patients, it ensures accuracy, efficiency, and convenience in prescription handling.</p>
            </div>
            {/* -----center section----- */}
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* Right section */}
            <div className='text-xl font-medium mb-5'>
                <p className='flex flex-col gap-2 text-gray-600'>GET IN TOUCH</p>
                <ul>
                    <li>+91 9027472733</li>
                    <li>asadm1059@gamil.com</li>
                </ul>
            </div>

        </div>
        {/* ------copyright text */}
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto  - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer