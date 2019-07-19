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
      url: 'http://localhost:8080/' + action.url,
      method: 'post',
      data: action.data || {}
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch(success(response.data, action.passToReducers))
        } else {
          dispatch(failure(response.data, action.passToReducers))
        }
      })
  }
}