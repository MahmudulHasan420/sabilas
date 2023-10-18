import React from 'react'

const SubHeading = ({text,className}) => {
  return (
    <h2 className={`font-rob font-bold text-4xl my-60 ${className}`}>{text}</h2>
  )
}

export default SubHeading