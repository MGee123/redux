import React from 'react'


export default (props) => {
    return (

    	<div>
    	 <p>Kate Bush</p>
    	 <p>{props.albums}</p>
         <button onClick={() => props.getAlbums()}>Get Albums</button>
         </div>
    	)
    
  }