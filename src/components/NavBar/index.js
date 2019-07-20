import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { notesActions } from '../../actions'
import { NotesMenu } from '../../components'
import './nav-bar.scss'

function NavBarContainer (props) {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>Notes</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <div className='nav-bar--mobile-menu d-md-none d-lg-none d-xl-none'>
            <NotesMenu />
          </div>
        </Nav>
        <Button
          variant='outline-primary'
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
