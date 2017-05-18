import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import rootSaga from './sagas/index.js'
import { addFormSubmitSagaTo } from 'redux-form-submit-saga'
import AppWithNavState, { AppNav } from './containers/app'

const store = configureStore(AppNav)

const combinedSaga = addFormSubmitSagaTo(rootSaga)

store.runSaga(combinedSaga)

const Root = () => (
  <Provider store={store}>
    <AppWithNavState />
  </Provider>
)

export default Root