/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TbMessages } from "react-icons/tb";
import useConversation  from '../../zustand/useConversation';
import { useAuthContext } from "../../context/AuthContext";
import { FaLeftLong } from "react-icons/fa6";

const MessageContainer = ({ showChat, handleToggle }) => {
   const {selectedConversation, setSelectedConversation}= useConversation();
   
   useEffect(() => {
   
    return () => setSelectedConversation(null)
   },[setSelectedConversation])
  return (
    <div
      className={
        showChat
          ? "w-[100%] flex-col flex"
          : "w-[100%]  flex-col hidden lg:flex"
      }
    >
      {!selectedConversation ? (
        <NoChatSelected />
      ) : ( 
        <>
       <div className="bg-blue-600 px-4 flex items-center gap-3 py-2 mb-2">
            <FaLeftLong onClick={handleToggle} className="lg:hidden" />
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
       )} 
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const {authUser} = useAuthContext()
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text:lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} 👨‍🦰</p>
        <p>Select a chat to Start Messaging !</p>
        <TbMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
