import React from 'react'
import { notesActions } from '../../actions'
import { connect } from 'react-redux'
import Editor from './Editor'
import { notesSelectors } from '../../selectors'

function EditorContainer (props) {
  if (!props.note.id) return null
  return (
    <Editor
      note={props.note}
      updateNote={props.updateNote} />
  )
}

function mapStateToProps (state) {
  return {
    note: notesSelectors.getNoteBySelectedId(state)
  }
}

function dispatchToProps (dispatch) {
  return {
    updateNote: (note) => dispatch(notesActions.updateNote(note))
  }
}

export const NotesEditor = connect(mapStateToProps, dispatchToProps)(EditorContainer)
