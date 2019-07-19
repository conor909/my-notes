import { userConstants } from '../constants'

function login (username, password) {
  return { type: userConstants.LOGIN_REQUEST }
}

export const userActions = {
  login
}
