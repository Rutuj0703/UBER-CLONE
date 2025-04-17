import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[95%] absolute top-0' onClick={()=>{
          props.setRidePopupPanel(false)
        }}><i className=" text-2xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-7'>New Ride Available!</h3>
        <div className='bg-gray-200 rounded-xl mb-2'>
            <div className='flex items-center justify-between p-3  rounded-xl mt-4 mb-1'>
            <div className='flex items-center justify-start gap-3 '>
                <img className='h-12 w-12 rounded-full object-cover' src="https://live.staticflickr.com/7160/6410037157_8a32776d93_b.jpg" alt="" />
                <h4 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h4>
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
        </div>
        </div>
        <div className='flex gap-2 justify-between w-full -mb-2'>
        <button onClick={()=>{
          props.setConfirmRidePopupPanel(true)
          props.confirmRide()
          props.setRidePopupPanel(false)
        }} className='w-1/2 bg-green-600 text-white font-semibold p-2 rounded-lg mt-1'>Accept</button>
        <button onClick={()=>{
            props.setRidePopupPanel(false)
        }} className='w-1/2 bg-red-500 text-white font-semibold p-2 rounded-lg mt-1'>Ignore</button>
        </div>
    </div>
  )
}

export default RidePopUp
