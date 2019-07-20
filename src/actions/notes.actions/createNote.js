import { notesConstants, middlewareConstants } from '../../constants'

const NEW_NOTE = {
  title: 'New Note',
  note: null
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
  return { type: notesConstants.NOTE_SAVE_REQUEST }
}

function createNoteSuccess (data, passToReducers) {
  return (dispatch, getStore) => {
    dispatch({
      type: notesConstants.NOTE_SAVE_SUCCESS,
      note: {
        ...NEW_NOTE,
        id: getStore().notes.notes.length + 1
      }
    })
  }
}

function createNoteFailure () {
  return {
    type: notesConstants.NOTE_SAVE_FAILURE
  }
}
