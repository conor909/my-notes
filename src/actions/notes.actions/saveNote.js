import { notesConstants, middlewareConstants } from '../../constants'

export default function saveNote (editedNote) {
  return {
    type: middlewareConstants.API_REQUEST,
    url: `/notes/${editedNote.id}`,
    method: 'post',
    data: {
      title: editedNote.title,
      note: editedNote.note
    },
    passToActions: {
      request: saveNoteRequest,
      success: saveNoteSuccess,
      failure: saveNoteFailure
    },
    passToReducers: {
      editedNote
    }
  }
}

function saveNoteRequest () {
  return { type: notesConstants.NOTE_SAVE_REQUEST }
}

function saveNoteSuccess (data, passToReducers) {
  const editedNote = passToReducers.editedNote
  return (dispatch, getStore) => {
    dispatch({
      type: notesConstants.NOTE_SAVE_SUCCESS,
      noteIndex: getStore().notes.notes.findIndex(note => (note.id === passToReducers.editedNote.id)),
      updatedNote: editedNote
    })
  }
}

function saveNoteFailure () {
  return {
    type: notesConstants.NOTE_SAVE_FAILURE
  }
}
