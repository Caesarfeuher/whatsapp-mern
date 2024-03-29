import  { useEffect, useState } from 'react'
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get('/messages/sync')
    .then(response => {
      setMessages(response.data);
    });
  }, []);


useEffect(() => {
    const pusher = new Pusher('3195b91e526a2c890925', {
    cluster: 'mt1'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (newMessage) => {
    // alert(JSON.stringify(newMessage));
    setMessages([...messages, newMessage])
  });

  return () => {
    channel.unbind_all();
    channel.unsubscribe();
  };

},[messages]);

console.log(messages)



  return (
    <div className='app grid min-h-screen place-items-center  bg-colos'>
        <div className='app__body flex bg-kante mt-[50px] mb-[50px] h-[90vh] w-[90vw] shadow-shade'>
        <Sidebar />
        <Chat messages={messages}/>
        </div> 
    </div>
  );
}

export default App;
