import * as types from '../constants/ActionTypes'

export function createNewPerson(person) {
  return {
    type: types.CREATE_NEW_PERSON,
    person
  }
}

export function awaitNewPerson() {
  return {
    type: types.AWAIT_NEW_PERSON
  }
}

export function receiveNewPerson(person) {
  return {
    type: types.RECEIVE_NEW_PERSON,
    person
  }
}