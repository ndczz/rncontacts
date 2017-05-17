import { put, call, take, fork, takeEvery } from 'redux-saga/effects'

import { PERSONS_URL } from '../constants/Urls'
import * as types from '../constants/ActionTypes'
import { awaitNewPerson, receiveNewPerson } from '../actions/person'
import { request } from '../utils/request'

export function* createNewPerson(action) {
  try {
    yield put(awaitNewPerson())
    const person = yield call(request, PERSONS_URL, 'post', JSON.stringify(action.person))
    yield put(receiveNewPerson(person))
  }
  catch (err) {
    yield put(receiveNewPerson(null))
  }
}

export function* watchCreatePerson() {
  yield takeEvery(types.CREATE_NEW_PERSON, createNewPerson)  
}
