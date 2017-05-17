import * as types from '../constants/ActionTypes'


const initialState = {
  loading: false,
  person: null
}

export default function person(state = initialState, action) {
  switch (action.type) {
    case types.AWAIT_NEW_PERSON:
      return Object.assign({}, state, {
        loading: true
      })
    case types.RECEIVE_NEW_PERSON:
      return Object.assign({}, state, {
        loading: false,
        person: action.person
      })
    default:
      return state
  }
}