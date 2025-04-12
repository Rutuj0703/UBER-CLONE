import React from 'react'
import { Link } from 'react-router-dom'

const Pickup = () => {
  return (
    <div className='h-screen'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
          <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>
      <div className='h-4/5'>
      <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-1/5 p-6 flex items-center justify-center flex-col bg-yellow-400'>
        <h4 className='text-xl font-semibold mb-4'>Go to Pickup</h4>
        <Link to='/otp' className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-1 flex items-center justify-center'>Picked Up</Link>
      </div>

    </div>
  )
}

export default Pickup
