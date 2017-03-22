import request from 'superagent'
import _ from 'lodash'



const initialState = { albums: []}

  export default function albums(state = initialState, action) {
  
  		switch (action.type) {
    case 'REQUEST_ARTIST_ALBUMS':
      return {
        ...state, albums: action.payload.bushAlbums
      }
       
      
    default:
      return state
  }
}


  

