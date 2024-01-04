import React from 'react'
import {Avatar} from '@mui/material';



function SidebarChat() {
  return (
    <div className='SidebarChat flex p-[20px] cursor-pointer border-b-1 border-[#f6f6f6] hover:bg-[#ebebeb]'>
      <Avatar />
      <div className='SidebarChat__info ml-[15px]'>
        <h2 className='text-base mb-[8px]'>Room name</h2>
        <p className=''>last msg</p>
      </div>
    </div>
  )
}

export default SidebarChat
