import { call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'
import { awaitNewPerson, receiveNewPerson } from '../actions/person'
import { request } from '../utils/request'
import { PERSONS_URL } from '../constants/Urls'


const validate = (props) => {
  const errors = {}
  const fields = ['name', 'surname']

  fields.forEach((f) => {
    if (!(f in props)) {
      errors[f] = `${f} is required`
    } else if (props[f].length < 4) {
      errors[f] = `${f} must be at least 4 characters`
    }
  })

  return errors
}

export function* createFormSubmit(action) {
  let errors = validate(action.payload)
  if (errors.name != undefined || errors.surname != undefined) {
    yield put({ type: types.CREATE_FORM_FAILURE, payload: { ...errors } })
  } else {
    try {
      yield put(awaitNewPerson())
      const person = yield call(request, PERSONS_URL, 'post', JSON.stringify(action.payload))
      yield put({ type: types.CREATE_FORM_SUCCESS, payload: person })
      yield put(receiveNewPerson(person))
    } catch (error) {
      yield put({ type: types.CREATE_FORM_FAILURE, payload: error.errors })
      yield put(receiveNewPerson(null))
    }
  }
}

export function* watchCreateForm() {
  yield takeLatest(types.CREATE_FORM_SUBMIT, createFormSubmit)
}