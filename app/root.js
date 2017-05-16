import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import rootSaga from './sagas/index.js'
import App from './containers/app'


const store = configureStore()

store.runSaga(rootSaga)

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root