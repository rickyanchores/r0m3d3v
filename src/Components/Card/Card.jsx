import React from 'react'

const Card = ({Name,Role}) => {
  return (
    <div className='Card bg-gray-700 m-2 p-5'>
        <img src="" alt="image" />
        <h3>{Name}</h3>
        <p>{Role}</p>
    </div>
  )
}

export default Card;