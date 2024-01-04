import {useState} from 'react'
import {Avatar,IconButton} from '@mui/material';
import {SearchOutlined,AttachFile,MoreVert} from '@mui/icons-material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import MicIcon from '@mui/icons-material/Mic'
import axios from '../axios';

function Chat({ messages }) {
  // const currentTime = new Date().toUTCString();
    const sendMessage = async e => {
      e.preventDefault();

      await axios.post('/messages/new', {
        message:input,
        name:"DEMO APP",
        timestamp:"Just now",
        received:false,
      });
      setInput('');
    };
    const [input, setInput] = useState('');


  return (
    <div className='chat flex flex-col grow-[0.65]'>
          <div className='chat__header flex items-center p-[20px] border-b-1 border-[lightgray]'>
                    <Avatar />
                    <div className='chat__headerInfo flex-1 pl-[20px]'>
                        <h3 className='mb-[3px] font-medium'>Room name</h3>
                        <p className='text-gray-400'> Last seen at...</p>
                    </div>

                    <div className='chat__headerRight '>
                        <IconButton>
                            <SearchOutlined className=''/>
                        </IconButton>
                        <IconButton>
                            <AttachFile className=''/>
                        </IconButton>
                        <IconButton>
                            <MoreVert className=''/>
                        </IconButton>     
                      </div>
            </div>
                        <div className='chat__body flex-1 bg-[url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")] bg-center bg-repeat p-[30px] overflow-scroll'>
                          {messages.map((message) => {
                             return (
                              <p className={`chat__message ml-[auto] mb-[60px] bg- bg-chat rounded-[10px] w-fit p-[10px] text-base  ${message.received && 'chat__receiver  mt-[55px] bg-white rounded-[10px] w-fit p-[10px] text-base absolute'}`}> 
                            <span className='chat__name text-xs font-extrabold top-[-15px] absolute'>{message.name}</span>
                            {message.message}
                            <span className='chat__timestamp ml-[10px] text-xs'>{message.timestamp}</span>
                            </p>
                             );
                          })}
                        </div>
                        

                        <div className='chat__footer flex justify-between items-center h-[62px] border-t-[1px] border-[lightgray]'>
                           <IconButton>
                               <InsertEmoticonIcon className='p-[2px] stroke-[gray]' />
                            </IconButton>
                            <form className='flex flex-1'>
                              <input 
                              value= {input} 
                              onChange = {(e) => setInput(e.target.value)}
                              className='flex-1 rounded-[30px] p-[10px] border-none outline-none' 
                              placeholder='Type a message' 
                              type='text'  
                              />
                              <button onClick={sendMessage} className='hidden' type='submit'>
                                send a message
                              </button>
                            </form>
                            <IconButton>
                              <MicIcon className='p-[2px] stroke-[gray]'/>
                            </IconButton>
                            
                        </div>
    </div>
  )
}

export default Chat







