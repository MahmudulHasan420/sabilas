import React from 'react'

const Input = ( {type , placeholder , className, text}) => {
  return (

    <>
    <h2 className='font-pop font-normal text-base mb-3'>{text}</h2>
     <input type={type} placeholder={placeholder} className={`py-3 pl-3 placeholder:font-pop placeholder:text-sm placeholder:font-normal  ${className}`} />
    </>
   
  )
}

export default Input