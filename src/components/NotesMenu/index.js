import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
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

NotesMenuContainer.propTypes = {
  notes: PropTypes.array.isRequired,
  selectedNoteId: PropTypes.number,
  getNotes: PropTypes.func.isRequired,
  handleSelectNote: PropTypes.func.isRequired
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
