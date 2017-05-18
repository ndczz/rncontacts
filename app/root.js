import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import rootSaga from './sagas/index.js'
import { addFormSubmitSagaTo } from 'redux-form-submit-saga'
import AppWithNavState, { AppNav, RootNav } from './containers/app'
import { notify, clearNotifications } from './actions/notification'

const PushNotification = require('react-native-push-notification')

export const store = configureStore(RootNav)

PushNotification.configure({
  onNotification: function (notification) {
    store.dispatch(notify(notification))
    store.dispatch(clearNotifications())
  }
})


const combinedSaga = addFormSubmitSagaTo(rootSaga)

store.runSaga(combinedSaga)

const Root = () => (
  <Provider store={store}>
    <AppWithNavState />
  </Provider>
)

export default Root