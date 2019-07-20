import { notesConstants, middlewareConstants } from '../../constants'

export default function getNotes (username, password) {
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
  return { type: notesConstants.GET_REQUEST }
}

function getNotesSuccess (data) {
  return {
    type: notesConstants.GET_SUCCESS,
    notes: data
  }
}

function getNotesFailure () {
  return {
    type: notesConstants.GET_FAILURE
  }
}
