/* eslint-disable no-unused-vars */
import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const SideBar = () => {
  return (
    <div>
       <div>
         <div className=" border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className=" divider px-3" />
      <Conversations />
      <LogoutButton />
    </div>
    </div>
    </div>
  )
}

export default SideBar
