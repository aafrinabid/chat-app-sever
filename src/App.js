import Chat from './components/chat';
import {useDispatch} from 'react-redux'
import { io } from 'socket.io-client';
import { messageActions } from './assets/store/messageSlice';
const socket=io('http://localhost:3001')

function App() {
  const dispatch=useDispatch();
  socket.on('recieve-message',msg=>{
    dispatch(messageActions.addMessage({message:msg,from:'them'}))
  })
  return (
    <div>
      <Chat />
     
    </div>
  );
}

export default App;
