import { fork } from 'redux-saga/effects'
import { watchRequestPersonList } from './persons'

export default function* rootSaga() {
  yield [fork(watchRequestPersonList)]
}
