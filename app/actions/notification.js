import * as types from '../constants/ActionTypes'

export function notify(notification) {
  return {
    type: types.NOTIFICATION,
    notification
  }
}

export function clearNotifications() {
  return {
    type: types.NOTIFICATION_CLEAR,
  }
}