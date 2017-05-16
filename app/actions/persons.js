import * as types from '../constants/ActionTypes'

export function requestPersonList() {
  return {
    type: types.REQUEST_PERSON_LIST
  }
}

export function fetchPersonList() {
  return {
    type: types.FETCH_PERSON_LIST
  }
}

export function receivePersonList(personList) {
  return {
    type: types.RECEIVE_PERSON_LIST,
    personList
  }
}