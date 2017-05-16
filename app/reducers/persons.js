import * as types from '../constants/ActionTypes'

const initialState = {
  loading: false,
  personList: {}
}

export default function persons(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PERSON_LIST:
      return Object.assign({}, state, {
        loading: true
      })
    case types.RECEIVE_PERSON_LIST:
      return Object.assign({}, state, {
        loading: false,
        personList: action.personList
      })
    default:
      return state
  }
}