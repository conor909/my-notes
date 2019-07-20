import React, { useEffect } from 'react'
import { notesActions } from '../../../actions'
import { connect } from 'react-redux'
import Menu from './Menu'

function NotesMenu (props) {
  useEffect(() => {
    props.getNotes()
  }, [])

  return (
    <Menu notes={props.notes} />
  )
}

function mapStateToProps (state) {
  return {
    notes: state.notes.notes
  }
};

function dispatchToProps (dispatch) {
  return {
    getNotes: () => dispatch(notesActions.getNotes())
  }
}

export default connect(mapStateToProps, dispatchToProps)(NotesMenu)
