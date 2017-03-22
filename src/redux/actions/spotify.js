import request from 'superagent'
import _ from 'lodash'

export const get = () => {
  		return (dispatch) => {
  			request
  .get('https://api.spotify.com/v1/artists/1aSxMhuvixZ8h9dK9jIDwL/albums')
  .end((err, res) => {
    const bushAlbums = _.uniq(_.map(res.body.items, (obj) => obj.name))
    console.log(bushAlbums)
    _.map(bushAlbums)
        
    return dispatch({ type:'get/REQUEST_ARTIST_ALBUMS', payload: bushAlbums}) 
    })
  }

}
