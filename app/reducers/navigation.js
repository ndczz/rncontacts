import { NavigationActions } from 'react-navigation'
import * as types from '../constants/ActionTypes'

const createNavReducer = function (navigator) {
  const initialState = navigator.router.getStateForAction(NavigationActions.reset(
    {
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Main' })]
    }
  ))

  const navReducer = (state = initialState, action) => {
    let nextState
    switch (action.type) {
      case types.GOTO_BACK:
        nextState = navigator.router.getStateForAction(
          NavigationActions.back(),
          state)
        break
      case types.GOTO_CREATE:
        nextState = navigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Create' }),
          state)
        break
      case types.GOTO_SHOW:
        nextState = navigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Show', params: action.person }),
          state
        )
        break
      default:
        nextState = navigator.router.getStateForAction(action, state)
        break
    }
    return nextState || state
  }

  return navReducer
}

export default createNavReducer