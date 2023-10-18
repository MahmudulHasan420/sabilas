import React from 'react'

const Facility = ({text, ditels, className}) => {
  return (
   
    <div className='w-30% bg-white items-center text-center' >
        <h2 className={`font-rob font-bold text-xl mb-4 mt-6 ${className}`}>{text}</h2> 
    <p className='font-rob font-normal text-base'>{ditels}</p>
    </div>
    
  )
}

export default Facility