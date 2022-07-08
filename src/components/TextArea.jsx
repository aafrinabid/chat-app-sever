import React from 'react'

function TextArea() {
  return (
    <div style={{display:'grid',gridTemplateColumns:'80% 20%'}}>
        <textarea style={{height:'70px',width:'100%'}}></textarea>
        <button>send the message</button>
    </div>
  )
}

export default TextArea