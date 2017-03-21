import React from 'react'
import _ from 'lodash'
import Cats from './cats'

export default (props) =>
  <div>
    <Cats onGenCat={() => props.genCat()} catName={props.catName}/>
  </div>