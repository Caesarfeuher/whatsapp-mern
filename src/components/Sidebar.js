import React from 'react';
import SidebarChat from './SidebarChat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
function Sidebar() {
  return (
    <div className='sidebar flex flex-col grow-[0.35]'>
          <div className='sidebar__header flex justify-between p-[20px] border-{right}-{1px}-{solid lightgray}'>
                    <Avatar src='https://media.licdn.com/dms/image/C4D03AQFLqmxHqFnvKQ/profile-displayphoto-shrink_800_800/0/1667921873653?e=2147483647&v=beta&t=tUarLcF4ZsJB_MGn5j896xGHybgbu60FIakLqgWOt0I'/>
                  <div className='sidebar__headerRight flex items-center justify-between min-w-[10vw]'>
                    <IconButton>
                        <DonutLargeIcon className='mr-[2vw] text-2xl'/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon className='mr-[2vw] text-2xl'/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon className='mr-[2vw] text-2xl'/>
                    </IconButton>     
                  </div>
          </div>
          <div className='sidebar__search flex items-center bg-[#f6f6f6] h-[39px] p-[10px]'>
              <div className='sidebar__searchContainer flex items-center bg-white w-[100%] h-[35px] rounded-[20px]'>
                  <SearchOutlined className='stroke-[gray] p-[3px]'/>
                  <input className='ml-[10px] outline-none border-none' placeholder='Search or start new chat' type='text'/>
              </div>
          </div>
          <div className='sidebar__chats flex-1 bg-white overflow-scroll'>
              <SidebarChat />
              <SidebarChat />
              <SidebarChat />
          </div>
    </div>
  )
}

export default Sidebar
