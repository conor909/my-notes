import { notesConstants, middlewareConstants } from '../../constants'

const NEW_NOTE = {
  title: 'New Note',
  note: ''
}

export default function createNote () {
  return {
    type: middlewareConstants.API_REQUEST,
    url: '/notes',
    method: 'post',
    data: NEW_NOTE,
    passToActions: {
      request: createNoteRequest,
      success: createNoteSuccess,
      failure: createNoteFailure
    }
  }
}

function createNoteRequest () {
  return (dispatch, getStore) => {
    dispatch({
      type: notesConstants.NOTE_CREATE_REQUEST,
      newNote: {
        ...NEW_NOTE,
        id: getStore().notes.notes.length + 1
      }
    })
  }
}

function createNoteSuccess (data, passToReducers) {
  return (dispatch, getStore) => {
    dispatch({
      type: notesConstants.NOTE_CREATE_SUCCESS,
      selectedNoteId: getStore().notes.notes.length
    })
  }
}

function createNoteFailure () {
  return {
    type: notesConstants.NOTE_CREATE_FAILURE
  }
}
