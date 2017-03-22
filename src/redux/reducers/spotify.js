import request from 'superagent'
import _ from 'lodash'



const initialState = { albums: []}

  export default function albums(state = initialState, action) {
  	const get = () => {
  		return request
  .get('https://api.spotify.com/v1/artists/1aSxMhuvixZ8h9dK9jIDwL/albums')
  .end((err, res) => {
    const bushAlbums = _.uniq(_.map(res.body.items, (obj) => obj.name))
    console.log(bushAlbums)
  })
  	}

  		switch (action.type) {
    case 'REQUEST_ARTIST_ALBUMS':
      return {
        ...state, albums: get() 
      }
       
      
    default:
      return state
  }
}


  

