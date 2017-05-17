import * as types from '../constants/ActionTypes'

export function gotoBack() {
  return {
    type: types.GOTO_BACK
  }
}

export function gotoCreate() {
  return {
    type: types.GOTO_CREATE
  }
}

export function gotoMain() {
  return {
    type: types.GOTO_MAIN
  }
}