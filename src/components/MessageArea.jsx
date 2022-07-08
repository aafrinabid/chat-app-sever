import React from 'react'
import MessageBox from './MessageBox'

function MessageArea() {
  return (
        <div style={{height:'530px',border:'1px solid black',display:'flex',flexDirection:'column',overflowY:'scroll'}}>
        <MessageBox from='me' />
        <MessageBox from='them' />

        </div>

  )
}

export default MessageArea