import { combineReducers } from 'redux'
import todos from './reducers/todos'
import user from './reducers/user'
import cats from './reducers/cats'
const rootReducer = combineReducers({
  cats
})

export default rootReducer
