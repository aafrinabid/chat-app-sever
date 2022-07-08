import React from 'react'

function MessageBox(props) {
    console.log(props)
    let style
    if(props.from==='me'){
        style={
            width:'50%',
            borderRadius:'10px',
            // justifyContent:'flex-start',
            alignItems:'flex-end',
            border:'1px solid black',
           margin:'5px 0px'

        }
        
    }else{
         style={
            width:'50%',
            alignItems:'flex-start',
            borderRadius:'10px',
            justifyContent:'flex-start',
            border:'1px solid black',


        }
        
    }
  return (
    <div style={style}>
        MessageBox
     </div>
  )
}

export default MessageBox