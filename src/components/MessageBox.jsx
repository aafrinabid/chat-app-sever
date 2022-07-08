import React from 'react'

function MessageBox(props) {
    console.log(props)
    let style
    let direction
    if(props.from==='me'){
        style={
            width:'50%',
            borderRadius:'10px',
            // justifyContent:'flex-start',
            alignItems:'flex-end',
            border:'1px solid black',
           margin:'5px 0px',
           backgroundColor:'wheat'

        }
        direction='flex-end'
        
    }else{
         style={
            width:'50%',
            alignItems:'flex-start',
            borderRadius:'10px',
            justifyContent:'flex-start',
            border:'1px solid black',
            backgroundColor:'gray'


        }
        direction='flex-start'

        
    }
  return (
    <div style={{display:'flex',justifyContent:direction,padding:'0px 5px'}}>
    <div style={style}>
       jfjslfkksjfjl jk ljfl kj j fjkj kfjkjk  kjfljklfk kkj  jfjkjj kdjlfj kfkjkfjjfkjkjfkjfkjfkjfkjfkj
     </div>
     </div>
  )
}

export default MessageBox