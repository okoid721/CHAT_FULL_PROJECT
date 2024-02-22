/* eslint-disable no-unused-vars */
import React, {useEffect, useRef} from 'react'
import Message from './Message'
import useGetMessages  from '../../hook/useGetMessages'
// import useListenMessages  from '../../hook/useListenMessages'
import useConversation from '../../zustand/useConversation'
import MessageSkeleton from '../skeletons/MessageSkeleton'

const Messages = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();
  // useListenMessages();

  useEffect(() => {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100)
  },[messages])

  return (
    <div className="px-4 overflow-y-auto h-full flex-1 ">
      
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} 
          ref={lastMessageRef}> 
            <Message  message={message} />
          </div>
        ))}



        {loading && [...Array(3)].map((_,idx) => <MessageSkeleton key={idx} />) }
        {!loading && messages.length === 0 && (
        <p className="text-center text-white">
          Start a chat with 
        </p>
      )}
    </div>
  )
}

export default Messages