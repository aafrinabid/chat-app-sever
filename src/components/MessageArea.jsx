import React from 'react'
import MessageBox from './MessageBox'

function MessageArea() {
  return (
        <div style={{height:'568px',border:'1px solid black',display:'flex',flexDirection:'column',overflowY:'scroll',backgroundColor:'rgb(255,254,254)'}}>
        <MessageBox from='me' />
        <MessageBox from='them' />
        <MessageBox from='me' />
        <MessageBox from='me' />
        <MessageBox from='me' />
        <MessageBox from='them' />
        <MessageBox from='me' />
        <MessageBox from='them' />
        <MessageBox from='me' />
        <MessageBox from='them' />
        <MessageBox from='them' />
        <MessageBox from='them' />
        <MessageBox from='me' />
        <MessageBox from='me' />
        <MessageBox from='me' />
        <MessageBox from='them' />
        <MessageBox from='me' />

        </div>

  )
}

export default MessageArea