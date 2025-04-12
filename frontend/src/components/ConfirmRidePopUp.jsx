import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
  return (
    <div>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
        <h5 className='p-1 text-center w-[95%] absolute top-0' onClick={()=>{
          props.setConfirmRidePopupPanel(false)
        }}><i className=" text-2xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-3 mt-7'>Confirm your Ride to Start!</h3>
            <div className='flex items-center justify-between p-3 rounded-xl mt-10 bg-gray-300'>
                <div className='flex items-center justify-start gap-3 '>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://live.staticflickr.com/7160/6410037157_8a32776d93_b.jpg" alt="" />
                    <h4 className='text-lg font-medium'>Abc Xyz</h4>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
                <div className='flex gap-2 flex-col justify-between items-center'>
                    <div className='w-full mt-1'>
                        <div className='flex items-center gap-5 p-3 border-b-2'>
                            <i className="ri-map-pin-user-fill"></i>
                            <div >
                                <h3 className='text-lg font-medium '>562/11-A</h3>
                                <p className='text-sm -mt-1 text-gray-600 '>Marine Lines, Mumbai</p>
                            </div>
                        </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div >
                            <h3 className='text-lg font-medium '>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600 '>Marine Lines, Mumbai</p>
            </div>
                </div>
                <div className='flex items-center gap-5 p-3'>
              <i className="ri-currency-line"></i>
              <div >
              <h3 className='text-lg font-medium '>₹193.20</h3>
              <p className='text-sm -mt-1 text-gray-600 '>Cash</p>
            </div>
                </div>
            </div>
            </div>
        <div className='mt-6'>
        <Link to='/picking-up' className='w-full mt-16 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm</Link>
        <button onClick={() => {
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
        }} className='w-full flex justify-center bg-red-500 text-white font-semibold text-lg p-3 rounded-lg mt-2'>Cancel</button>
        </div>
        

    </div>
  )
}

export default ConfirmRidePopUp
