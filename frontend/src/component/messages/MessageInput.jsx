/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { BiSolidSend } from "react-icons/bi";
import useSendMessage from '../../hook/useSendMessage'

const MessageInput = () => {
  const {loading, sendMessage} = useSendMessage()
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage('');
  }
  return (
    <form className="px-4 my-4" onSubmit={handleSubmit}>
    <div className="w-ful relative">
      <input
        type="text"
        placeholder="Send a message"
        className="border  text-lg rounded-lg w-full bg-zinc-300 text-gray-700"
        value={message}
        onChange={(e)=> setMessage(e.target.value)}
      />
      <button
        type="submit"
        className=" absolute end-0 inset-y-0 text-[100] text-[#3e7eb2] flex items-center pe-3 z-50"
      >
       { loading ? <div className=" loading loading-spinner"></div> : <BiSolidSend /> }
      </button>
    </div>
  </form>
  )
}

export default MessageInput

