import React from 'react'

export const CustomCard = ({elem}) => {
  return (
    <article className='w-100 text-center border border-2 border-black rounded-4 shadow'>
      <img 
        src={elem.image} 
        alt={elem.name}
        className='w-100 rounded-top-4'
      />
      <p className='border-top border-2 border-black fs-5 fw-bold'>{elem.name}</p>
    </article>
  )
}
