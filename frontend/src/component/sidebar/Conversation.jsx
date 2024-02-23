/* eslint-disable no-unused-vars */
import React from 'react'
import Profile from '../../../public/IMG-20230615-WA0043.jpg'
import useConversation from "../../zustand/useConversation";
import {useSocketContext} from '../../context/SocketContext'

const Conversation = ({ showChat, handleToggle,conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
 <div
        className={`flex gap-2 items-center hover:bg-blue-600 rounded p-2 py-1 cursor-pointer
      ${isSelected ? "bg-blue-600" : ""}`}
        onClick={() => {
          setSelectedConversation(conversation);
          handleToggle();
        }}
      >
        <div className={` avatar ${isOnline ? "online" : ""}`}>
          <div className=" rounded-full w-12 ">
            <img src={conversation.profilePic} alt="userAvater" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
          </div>
        </div>
      </div>
     {!lastIdx &&  <div className="divider my-0 py-0 h-1 " />}
    </>
  )
}

export default Conversation