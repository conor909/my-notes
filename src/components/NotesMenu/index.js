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
      onSelectNote={props.handleSelectNote}
      notes={props.notes} />
  )
}

function mapStateToProps (state) {
  return {
    notes: state.notes.notes
  }
};

function dispatchToProps (dispatch) {
  return {
    getNotes: () => dispatch(notesActions.getNotes()),
    handleSelectNote: (noteId) => dispatch(notesActions.selectNote(noteId))
  }
}

export const NotesMenu = connect(mapStateToProps, dispatchToProps)(NotesMenuContainer)
