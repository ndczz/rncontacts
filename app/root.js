import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import rootSaga from './sagas/index.js'
import AppWithNavState, {AppNav} from './containers/app'

const store = configureStore(AppNav)

store.runSaga(rootSaga)

const Root = () => (
  <Provider store={store}>
    <AppWithNavState />
  </Provider>
)

export default Root