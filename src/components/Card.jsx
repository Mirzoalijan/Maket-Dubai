import React from 'react'

const Card = (Props) => {
  return (
    <div>
     <img src={Props.img} alt="" />
     <p className='text-[#E8E8E8] dark:text-black text-[18px] font-[400] mt-[30px]'>{Props.text}</p>
    </div>
  )
}

export default Card