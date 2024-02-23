/* eslint-disable no-unused-vars */
import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hook/useGetConversations'

const Conversations = ({ showChat, handleToggle }) => {
  const { loading, conversations } = useGetConversations();
  return (
       <div className=" py-2 flex flex-col overflow-auto">
             {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          showChat={showChat}
          handleToggle={handleToggle}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  )
}

export default Conversations