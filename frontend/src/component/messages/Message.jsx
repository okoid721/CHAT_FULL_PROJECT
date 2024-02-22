/* eslint-disable no-unused-vars */
import React from 'react'
import Profile from '../../../public/IMG-20230615-WA0043.jpg'

const Message = () => {
  return (
    <div className=" chat chat-end">
    <div className=" chat-image avatar">
      <div className="w-10 rounded-full">
        <img src={Profile} alt="" />
      </div>
    </div>
    <div className={`chat-bubble text-white bg-blue-500`}>
      Hi! What sup How are you doing
    </div>
    <div className=" chat-footer opacity-50 text-xs flex gap-1 items-center">
      12:14
    </div>
  </div>
  )
}

export default Message