import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ConfirmRidePopUp = (props) => {
    const [ otp, setOtp ] = useState('')
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: props.ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
            navigate('/captain-riding', { state: { ride: props.ride } })
        }

    }

  return (
    <div>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
        <h5 className='p-1 text-center w-[95%] absolute top-0' onClick={()=>{
          props.setConfirmRidePopupPanel(false)
        }}><i className=" text-2xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mt-7'>Confirm your Ride to Start!</h3>
            <div className='flex items-center justify-between p-3 rounded-xl mt-5 bg-gray-300'>
                <div className='flex items-center justify-start gap-3 '>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://live.staticflickr.com/7160/6410037157_8a32776d93_b.jpg" alt="" />
                    <h4 className='text-lg font-medium capitalize'>{props.ride?.user.fullname.firstname}</h4>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
                <div className='flex gap-2 flex-col justify-between items-center'>
                    <div className='w-full mt-1'>
                        <div className='flex items-center gap-5 p-3 border-b-2'>
                            <i className="ri-map-pin-user-fill"></i>
                            <div >
                                <h3 className='text-lg font-medium '>562/11-A</h3>
                                <p className='text-sm -mt-1 text-gray-600 '>{props.ride?.pickup}</p>
                            </div>
                        </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div >
                            <h3 className='text-lg font-medium '>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600 '>{props.ride?.destination}</p>
            </div>
                </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div >
                            <h3 className='text-lg font-medium '>₹{props.ride?.fare}</h3>
                            <p className='text-sm -mt-1 text-gray-600 '>Cash</p>
                        </div>
                    </div>
                </div>
            <div className='-mt-2 w-full'>
                <form onSubmit={submitHandler}>
                    <input value={otp} onChange={(e) => setOtp(e.target.value)} type="text" className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3' placeholder='Enter OTP' />
                    <div className='flex justify-between flex-row gap-2'>
                        <button className='w-full mt-5 text-lg  bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm</button>
                        <button onClick={() => {
                            props.setConfirmRidePopupPanel(false)
                            props.setRidePopupPanel(false)

                        }} className='w-full mt-5 bg-red-600 text-lg text-white font-semibold p-3 rounded-lg'>Cancel</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default ConfirmRidePopUp
