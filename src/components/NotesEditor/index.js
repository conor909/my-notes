import React from 'react'
import PropTypes from 'prop-types'
import { notesActions } from '../../actions'
import { connect } from 'react-redux'
import Editor from './Editor'
import { notesSelectors } from '../../selectors'

function EditorContainer (props) {
  if (!props.note.id) return null
  return (
    <Editor
      note={props.note}
      saveNote={props.saveNote} />
  )
}

EditorContainer.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    note: PropTypes.string
  }),
  saveNote: PropTypes.func
}

function mapStateToProps (state) {
  return {
    note: notesSelectors.getNoteBySelectedId(state)
  }
}

function dispatchToProps (dispatch) {
  return {
    saveNote: (note) => dispatch(notesActions.saveNote(note))
  }
}

export const NotesEditor = connect(mapStateToProps, dispatchToProps)(EditorContainer)
