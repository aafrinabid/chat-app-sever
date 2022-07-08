import React from 'react'
import classes from './chat.module.css'
import ChatComponent from './ChatComponent'
import ChatUser from './ChatUser'

function Chat() {
  return (
    <div className={classes.container}>
  <div className={classes.chat}>
    <ChatUser/>
    <ChatComponent/>


  </div>
  </div>
  )
}

export default Chat