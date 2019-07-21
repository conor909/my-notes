import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { apiMiddleware } from './middleware/api-request.middleware'
import { initialState as notesInitialState } from './reducers/notes.reducer'
import App from './App'

const middlewares = [thunk, apiMiddleware]
const mockStore = configureStore(middlewares)

it('renders without crashing', () => {
  const div = document.createElement('div')
  const initialState = {
    notes: notesInitialState
  }
  ReactDOM.render(
    <Provider store={mockStore(initialState)}>
      <App />
    </Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
