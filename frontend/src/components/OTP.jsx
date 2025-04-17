// import React, { useState } from 'react'
// import { Link, useNavigate, useLocation } from 'react-router-dom'
// import axios from 'axios'

// const OTP = (props) => {
//   const [ otp, setOtp ] = useState('')
//     const navigate = useNavigate()

//     const submitHander = async (e) => {
//         e.preventDefault()

//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
//             params: {
//                 rideId: props.ride._id,
//                 otp: otp
//             },
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         })

//         if (response.status === 200) {
//             props.setConfirmRidePopupPanel(false)
//             props.setRidePopupPanel(false)
//             navigate('/captain-riding', { state: { ride: props.ride } })
//         }
//     }
//   return (
//     <div className='h-screen'>
//         <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
//           <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
//           <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
//             <i className="text-lg font-medium ri-logout-box-r-line"></i>
//           </Link>
//         </div>
//       <div className='h-4/5'>
//       <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
//       </div>
//       <div className='h-1/5 p-6 flex items-center justify-center flex-col bg-yellow-400'>
//         <h4 className='text-xl font-semibold mb-1'>Enter the OTP</h4>
//         <form className='flex flex-row gap-1 mb-3' onSubmit={(e)=>{
//             submitHander(e)
//         }} action="">
//             <input value={otp} type="text" 
//                 onChange={(e)=>{
//                     setOtp(e.target.value)
//                 }}
//                 className='bg-[#eee] font-mono   px-8 py-2 text-lg rounded-lg w-full mt-3'  
//                 placeholder='"123456"'/> 
//                 <button onClick={() => {
//                     navigate("/captain-riding")
//                 }}
//                  className='bg-[#4e3ecc] px-4 py-2 text-lg rounded-lg mt-3'><i className="ri-arrow-right-fill"></i></button>
//         </form>
        
//       </div>

//     </div>
//   )
// }

// export default OTP
