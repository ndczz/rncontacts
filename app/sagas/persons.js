import { put, take, fork, call } from 'redux-saga/effects'

import { PERSONS_URL } from '../constants/Urls'
import * as types from '../constants/ActionTypes'
import { fetchPersonList, receivePersonList } from '../actions/persons'
import { request } from '../utils/request'

export function* requestPersonList() {
  try {
    yield put(fetchPersonList())
    const personList = yield call(request, PERSONS_URL, 'get')    
    yield put(receivePersonList(personList))
  }
  catch (err) {
    yield put(receivePersonList([]))
  }

}


export function* watchRequestPersonList() {
  while (true) {
    yield take(types.REQUEST_PERSON_LIST)
    yield fork(requestPersonList)
  }
}
