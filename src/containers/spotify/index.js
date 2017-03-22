import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from 'redux/actions/spotify'
import ArtistAlbums from 'components/spotify'

class BushContainer extends Component {

 render() {
 	return (
 	  <ArtistAlbums
 	  get={() => this.props.dispatch(get())}
 	  albums={this.props.albums}
 	  
 	  /> )
 	

 }
}
export default connect((state) => state)(BushContainer)