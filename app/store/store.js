import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from '../reducers/index'


const middlewares = []
const { logger } = require('redux-logger')

const sagaMiddleware = createSagaMiddleware()

middlewares.push(sagaMiddleware)

if (__DEV__) {
  middlewares.push(logger)
}

const createStoreWithmiddleware = applyMiddleware(...middlewares)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithmiddleware(rootReducer, initialState)
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}