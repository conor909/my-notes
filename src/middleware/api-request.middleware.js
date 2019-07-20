import axios from 'axios'
import { middlewareConstants } from '../constants'

export function apiMiddleware ({ dispatch }) {
  return next => action => {
    if (action.type !== middlewareConstants.API_REQUEST) {
      next(action)
      return
    }
    const { request, success, failure } = action.passToActions
    dispatch(request())

    axios({
      url: 'http://localhost:8080' + action.url,
      method: action.method || 'get',
      data: action.data || {},
      params: action.params || {},
      auth: {
        username: 'admin',
        password: '1234'
      }
    })
      .then((response) => {
        if (response.data.message === 'Success') {
          dispatch(success(response.data.data, action.passToReducers))
        } else {
          dispatch(failure(response.message))
        }
      })
  }
}
