import React from 'react'

const LocationSearchPanel = (props) => {
  console.log(props)
  // sample array forlocation
  const locations = [
    "28, Atharva CHS, Bimbisar Nagar, Goregaon-East",
    "27/C Panchsheel CHS, Bimbisar Nagar, Goregaon-East",
    "MamtaDeep Heights, Near Mysore Colony Monorail Station, Chembur",
    "24B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal"
  ]
  return (
    <div>
      {/* This is sample data */}
      {
      locations.map(function(elem,idx){
        return <div key={idx} onClick={()=>{
          props.setVehiclePanel(true)
          props.setPanelOpen(false)
        }} className='flex gap-4 border-2 border-gray-50 active:border-black p-3 rounded-xl  my-2 items-center justify-start'>
        <h2 className='bg-[#eee] flex items-center justify-center h-10 w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
        <h4 className='font-medium'>{elem}</h4>
      </div>
      })
      }

    </div>
  )
}

export default LocationSearchPanel
Location