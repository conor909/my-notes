import React from 'react'
// import { notesActions } from '../../actions'
import { connect } from 'react-redux'
import Editor from './Editor'
import { notesSelectors } from '../../selectors'

function NotesMenu (props) {
  console.log(props)
  return (
    <Editor note={props.note} />
  )
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

export default connect(mapStateToProps, dispatchToProps)(NotesMenu)
