import React, { Component } from 'react'
import { connect } from 'react-redux'
import { genCat } from 'redux/actions/cats'
import Cat from 'components/cats'

class CatContainer extends Component {

render() {
    return (
      <Cat
        
        onGenCat={(cats) => this.props.dispatch(onGenCat())}
        
      />
    )
  }
}

export default connect((state) => state.cats)(CatContainer)
