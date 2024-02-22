/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import Message from './Message'
import useGetMessages  from '../../hook/useGetMessages'
import useListenMessages  from '../../hook/useListenMessages'
import useConversation from '../../zustand/useConversation'

const Messages = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { messages, loading } = useGetMessages();
  useListenMessages();

  return (
    <div className="px-4 overflow-y-auto h-full flex-1 ">
      {/* <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message /> */}
    </div>
  )
}

export default Messages