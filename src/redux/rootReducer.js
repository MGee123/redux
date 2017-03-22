import { combineReducers } from 'redux'
import todos from './reducers/todos'
import user from './reducers/user'
import cats from './reducers/cats'
import spotify from './reducers/spotify'
const rootReducer = combineReducers({
  spotify
})

export default rootReducer
