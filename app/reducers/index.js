import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import persons from './persons'
import person from './person'
import navigation from './navigation'
import notification from './notification'


const createRootReducer = function (nav) {
  return combineReducers({
    nav: navigation(nav),
    persons,
    person,
    notification,
    form: formReducer
  })
}

export default createRootReducer
