import { combineReducers } from 'redux'
import persons from './persons'
import person from './person'
//import navigation from './navigation'

const rootReducer = combineReducers({
  persons,
  person,
  // navigation
})

export default rootReducer
