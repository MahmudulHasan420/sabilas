import React from 'react'
import Flex from './Flex'

const ProductHeading = ({text , price , className}) => {
  return (
  <>
    <h3 className={`font-pop text-xl font-semibold mb-5 mt-7 ${className}`}>{text}</h3>

    <Flex>
    <h6 className='font-pop font-semibold text-xl '>price :</h6>
    <p className={`font-pop text-xl font-normal ml-3`}>{price}</p>
    </Flex>
  </>
  )
}

export default ProductHeading