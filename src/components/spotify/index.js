import React from 'react'
import _ from 'lodash'
import ArtistAlbums from './bush'

export default (props) => {
return (
<div>
<p>
        {_.map(props.albums, ((album) => {
          return <Albums album={albums} />
        }))}
      </p>
<ArtistAlbums getAlbums={() => props.get()} albums={props.albums}  />
<button onClick={() => props.get()}>Get Albums</button>
         </div>
    	
)
}
