import * as types from '../constants/ActionTypes'


const initialState = {
  notification: null,
}

export default function notification(state = initialState, action) {
  switch (action.type) {
    case types.NOTIFICATION:
      return Object.assign({}, state, {
        notification: action.notification
      })
    case types.NOTIFICATION_CLEAR:
      return Object.assign({}, state, {
        notification: null
      })
    default:
      return state
  }
}