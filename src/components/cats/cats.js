import React from 'react'


export default (props) => {
 
  return (
    <div>
      <p>Cat Generator</p>
   
    
      
      <button onClick={() => props.onGenCat()}>Generate Cat</button>
    
    </div>
  )
}
