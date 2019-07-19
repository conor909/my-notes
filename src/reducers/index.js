import { combineReducers } from 'redux'
import { authentication } from './authentication.reducer'
import { notes } from './notes.reducer'

const rootReducer = combineReducers({
  authentication,
  notes
})

export default rootReducer
