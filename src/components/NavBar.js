import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { notesActions } from '../actions'

function NavBarContainer (props) {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>Notes</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <a>{'link'}</a>
          <a>{'link'}</a>
        </Nav>
        <Button
          variant='outline-success'
          onClick={props.handleCreateNote}>
            + Create
        </Button>
      </Navbar.Collapse>
    </Navbar>
  )
}

const mapStateToProps = (state) => ({})

function dispatchToProps (dispatch) {
  return {
    handleCreateNote: () => dispatch(notesActions.createNote())
  }
}

export const NavBar = connect(mapStateToProps, dispatchToProps)(NavBarContainer)
