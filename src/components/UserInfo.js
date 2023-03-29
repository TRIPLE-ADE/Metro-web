import React from 'react'
import Button from './Button'
import ratingImage from '../image/ratings.png'

function UserInfo({user,currentUser}) {
  return (
    <div className='-mt-40 pl-9'>
        <p className='text-4xl font-semibold text-primary-dark '>5.0</p>
        <img src={ratingImage} alt="" width={120} className="my-3" />
        <p className='text-3xl font-medium'>{user[currentUser].name}</p>
        <p className='mt-3 mb-6 text-lg font-medium'>{user[currentUser].position}</p>
        <p className='mb-8 text-justify w-96'>{user[currentUser].intro}</p>
        <Button bgColor='primary-dark shadow-[25px_15px_150px_#4CAF50]' text="Book a session"/>
    </div>
  )
}

export default UserInfo