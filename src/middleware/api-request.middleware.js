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
      auth: {
        username: 'admin',
        password: '1234'
      }
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch(success(response.data.data))
        } else {
          dispatch(failure(response.message))
        }
      })
  }
}
