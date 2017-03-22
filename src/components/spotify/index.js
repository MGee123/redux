import React from 'react'
import _ from 'lodash'
import ArtistAlbums from './bush'

export default (props) => {
return (
<div>

<ArtistAlbums getAlbums={() => props.get()} albums={props.albums}  />
<button onClick={() => props.get()}>Get Albums</button>
         </div>
    	
)
}
