/* eslint-disable no-unused-vars */
import React from 'react'
import { BsFillSearchHeartFill } from "react-icons/bs";


const SearchInput = () => {
  return (
    <div>
         <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
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