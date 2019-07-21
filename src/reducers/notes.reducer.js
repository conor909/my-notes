import { notesConstants } from '../constants'
import update from 'immutability-helper'

export const initialState = {
  loadingNotes: false,
  savingNote: false,
  creatingNote: false,
  selectedNoteId: null,
  notes: []
}

export function notes (state = initialState, action) {
  switch (action.type) {
    case notesConstants.NOTES_GET_REQUEST:
      return update(state, {
        loadingNotes: { $set: true }
      })
    case notesConstants.NOTES_GET_SUCCESS:
      return update(state, {
        loadingNotes: { $set: false },
        notes: { $set: action.notes }
      })
    case notesConstants.NOTES_GET_FAILURE:
      return update(state, {
        loadingNotes: { $set: false }
      })
    case notesConstants.NOTE_SELECT:
      return update(state, {
        selectedNoteId: { $set: action.noteId }
      })
    case notesConstants.NOTE_CREATE_REQUEST:
      return update(state, {
        creatingNote: { $set: true },
        notes: { $push: [action.newNote] }
      })
    case notesConstants.NOTE_CREATE_SUCCESS:
      return update(state, {
        selectedNoteId: { $set: action.selectedNoteId },
        creatingNote: { $set: false }
      })
    case notesConstants.NOTE_CREATE_FAILURE:
      return update(state, {
        creatingNote: { $set: false }
      })
    case notesConstants.NOTE_SAVE_REQUEST:
      return update(state, {
        savingNote: { $set: true }
      })
    case notesConstants.NOTE_SAVE_SUCCESS:
      return update(state, {
        savingNote: { $set: false },
        notes: {
          [action.noteIndex]: { $set: action.updatedNote }
        }
      })
    case notesConstants.NOTE_SAVE_FAILURE:
      return update(state, {
        savingNote: { $set: false }
      })
    default:
      return state
  }
}
