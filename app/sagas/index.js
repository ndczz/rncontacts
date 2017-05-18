import { fork } from 'redux-saga/effects'
import { watchRequestPersonList } from './persons'
import { watchCreatePerson } from './person'
import { watchCreateForm } from './CreateForm'

export default function* rootSaga() {
  yield [fork(watchRequestPersonList), fork(watchCreatePerson), fork(watchCreateForm)]
}

