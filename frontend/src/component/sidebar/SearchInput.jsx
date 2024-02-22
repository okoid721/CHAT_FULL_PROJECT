/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { BsFillSearchHeartFill } from "react-icons/bs";
import useConversation from '../../zustand/useConversation'
import useGetConversation from '../../hook/useGetConversation'
import toast from 'react-hot-toast'


const SearchInput = () => {
  const [search, setSearch] = useState("")
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversation()

const handleSubmit = (e) =>{
    e.preventDefault()
     if(!search)return;
      if(search.length < 3){
      return toast.error("Search must be at least 3 character Long")
    }
    const conversation = conversations.find((e)=> e.fullName.toLowerCase().include(search.toLowerCase()))
    if(conversation) {
      setSelectedConversation(conversation)
      setSearch('');
    }else toast.error("Not Found")
 }
  return (
    <div>
         <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" input input-bordered rounded-full bg-zinc-300 placeholder:text-gray-500 text-gray-900"
      />
      <button
        type="submit"
        className="btn btn-circle bg-zinc-300 text-[#66AAE2] hover:bg-[#66AAE2] hover:text-white border-transparent"
      >
        <BsFillSearchHeartFill className="w-6 outline-none h-6" />
      </button>
    </form>
    </div>
  )
}

export default SearchInput