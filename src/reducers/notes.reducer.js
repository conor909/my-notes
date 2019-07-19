import { notesConstants } from '../constants'

const initialState = {
  loadingNotes: false,
  savingNote: false,
  notes: []
}

export function notes (state = initialState, action) {
  switch (action.type) {
    case notesConstants.GET_REQUEST:
      return {
        loadingNotes: true
      }
    case notesConstants.GET_SUCCESS:
      return {
        loadingNotes: false,
        notes: action.notes
      }
    case notesConstants.GET_FAILURE:
      return {
        loadingNotes: false
      }
    case notesConstants.SAVE_REQUEST:
      return {
        savingNote: true
      }
    case notesConstants.SAVE_SUCCESS:
      return {
        savingNote: false,
        note: action.note
      }
    case notesConstants.SAVE_FAILURE:
      return {
        savingNote: false
      }
    case notesConstants.UPDATE_REQUEST:
      return {
        savingNote: true
      }
    case notesConstants.UPDATE_SUCCESS:
      return {
        savingNote: false,
        note: action.note
      }
    case notesConstants.UPDATE_FAILURE:
      return {
        savingNote: false
      }
    default:
      return state
  }
}
