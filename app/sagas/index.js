import { fork } from 'redux-saga/effects'
import { watchRequestPersonList } from './persons'
import { watchCreatePerson } from './person'

export default function* rootSaga() {
  yield [fork(watchRequestPersonList), fork(watchCreatePerson)]
}
