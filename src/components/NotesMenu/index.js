import React, { useEffect } from 'react'
import { notesActions } from '../../actions'
import { connect } from 'react-redux'
import Menu from './Menu'

function NotesMenuContainer (props) {
  useEffect(() => {
    props.getNotes()
  }, [])

  return (
    <Menu
      selectedNoteId={props.selectedNoteId}
      onSelectNote={props.handleSelectNote}
      notes={props.notes} />
  )
}

function mapStateToProps (state) {
  return {
    notes: state.notes.notes,
    selectedNoteId: state.notes.selectedNoteId
  }
};

function dispatchToProps (dispatch) {
  return {
    getNotes: () => dispatch(notesActions.getNotes()),
    handleSelectNote: (noteId) => dispatch(notesActions.selectNote(noteId))
  }
}

export const NotesMenu = connect(mapStateToProps, dispatchToProps)(NotesMenuContainer)
