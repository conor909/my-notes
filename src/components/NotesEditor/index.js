import React from 'react'
// import { notesActions } from '../../actions'
import { connect } from 'react-redux'
import Editor from './Editor'
import { notesSelectors } from '../../selectors'

function EditorContainer (props) {
  return props.note.id
    ? <Editor note={props.note} />
    : null
}

function mapStateToProps (state) {
  return {
    note: notesSelectors.getNoteBySelectedId(state)
  }
}

function dispatchToProps (dispatch) {
  return {
    // saveNote: (noteId) => dispatch(notesActions.saveNote(noteId))
  }
}

export const NotesEditor = connect(mapStateToProps, dispatchToProps)(EditorContainer)
