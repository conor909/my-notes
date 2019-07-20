import { notesConstants, middlewareConstants } from '../../constants'

export default function getNotes () {
  return {
    type: middlewareConstants.API_REQUEST,
    url: '/notes',
    passToActions: {
      request: getNotesRequest,
      success: getNotesSuccess,
      failure: getNotesFailure
    }
  }
}

function getNotesRequest () {
  return { type: notesConstants.NOTES_GET_REQUEST }
}

function getNotesSuccess (data) {
  return {
    type: notesConstants.NOTES_GET_SUCCESS,
    notes: data.map(note => ({
      ...note,
      note: note.note ? JSON.parse(note.note) : null
    }))
  }
}

function getNotesFailure () {
  return {
    type: notesConstants.NOTES_GET_FAILURE
  }
}
