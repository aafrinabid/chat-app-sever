import React from 'react'
import ChatList from './ChatList'
import classes from './ChatUser.module.css'
import UserContainer from './UserContainer'

function ChatUser() {
  return (
    <div style={{backgroundColor:'black'}}>
      <h4 style={{color:'white'}}>username</h4>
    <div className={classes.list}>
        
       <UserContainer/>
       <UserContainer/>
       <UserContainer/>
       <UserContainer/>
       <UserContainer/>
       <UserContainer/>
       <UserContainer/>
       <UserContainer/>

        

        
    </div>
    </div>
  )
}

export default ChatUser