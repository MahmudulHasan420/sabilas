import React from 'react'

const Button = ({text , className}) => {
  return (
        
    <button className={`font-pop font-normal text-base px-7 py-3 bg-main ${className}`}>{text}</button>
  )
}

export default Button