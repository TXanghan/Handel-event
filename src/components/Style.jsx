import React, { useState } from 'react'

export default function Style() {
    let[Status,setStatus]=useState(true);
    let[colour,setcolour]=useState(false);
  return (
    <div>
      <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>Show</button>
      <button onClick={()=>setStatus(!Status)}>Toggle</button>
      {
        Status? <div className='Status' style={colour?{backgroundColor:"red"}:{backgroundColor:'pink'}}>
            
        </div>:null
       
      }
       <button onClick={()=>setcolour(!colour)} style={{marginTop:'20px'}}>Change colour</button>
    </div>
  )
}


