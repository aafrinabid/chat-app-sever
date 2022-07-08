import React from 'react'
import MessageArea from './MessageArea'
import TextArea from './TextArea'
import UserNameContent from './UserNameContent'

function ChatContent() {
  return (
    <div>
<UserNameContent />
<MessageArea />
<TextArea />
    </div>
  )
}

export default ChatContent