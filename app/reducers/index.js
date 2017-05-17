import { combineReducers } from 'redux'
import persons from './persons'
import person from './person'
import navigation from './navigation'


const createRootReducer = function (nav) {  
  return combineReducers({
    nav: navigation(nav),
    persons,
    person,
  })
}

export default createRootReducer
