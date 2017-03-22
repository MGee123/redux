import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestAlbums, receiveAlbums } from 'redux/actions/spotify'
import ArtistAlbums from 'components/spotify'

class BushContainer extends Component {

 render() {
 	return (
 	  <ArtistAlbums
 	  getAlbums={() => this.props.dispatch(requestAlbums())}
 	  albums={this.props.albums}
 	  
 	  /> )
 	

 }
}
export default connect((state) => state)(BushContainer)