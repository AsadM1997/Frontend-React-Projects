import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
const Appointments = () => {
  const { docId } = useParams()
  const { doctors,currencySymbol } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null);
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo);

  }

  useEffect(
    () => {
      fetchDocInfo()
    }, [doctors, docId]
  )
  return docInfo && (
    <div>
      {/* doctors details  */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-blue-600 w-full sm:max-w-72 rounded-lg' src={docInfo.image} />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:[mt-0]'>
          {/* docInfo : name, degree, experience   */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
          {docInfo.name} 
          <img className='w-5' src={assets.verified_icon} /></p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p >{docInfo.degree} -  {docInfo.speciality}</p>
            <button className='border rounded-full px-2 py-0.5 text-xs'>{docInfo.experience}</button>
          </div>
          {/* Doctor About******* */}
          <div >
            <p className='flex items-center mt-3 gap-1 text-sm font-medium text-gray-900'>About <img src={assets.info_icon} /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1 '>{docInfo.about}</p>
            <p className='text-gray-500 font-medium mt-4'>
              Appointment:fee <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
            </p>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Appointments       