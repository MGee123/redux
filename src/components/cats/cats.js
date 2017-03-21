import React from 'react'


export default (props) => {
 
  return (
    <div>
      <p>Cat Generator</p>
   <p>{props.currentCat.name}</p>
  <p><img src={props.currentCat.img} /></p>
    
      
      <button onClick={() => props.onGenCat()}>Generate Cat</button>
    
    </div>
  )
}
