/* eslint-disable no-unused-vars */
import React from 'react'
import Profile from '../../../public/IMG-20230615-WA0043.jpg'

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className=" avatar online">
          <div className=" rounded-full w-12 ">
            <img src={Profile} alt="userAvater" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">Coder Dave</p>
            <span className="text-xl">😎</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1 " />
    </>
  )
}

export default Conversation