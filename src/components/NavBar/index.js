import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Emoji from 'a11y-react-emoji'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { notesActions } from '../../actions'
import { NotesMenu } from '../../components'
import './nav-bar.scss'

function NavBarContainer (props) {
  return (
    <Navbar expand='lg'>
      <Navbar.Brand href='#home'>
        <span className='brand--icon'>
          <Emoji symbol='✍️' label='writing note' />
        </span>
        <span className='brand--wording'>Notes</span>
      </Navbar.Brand>
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

NavBarContainer.propTypes = {
  handleCreateNote: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({})

function dispatchToProps (dispatch) {
  return {
    handleCreateNote: () => dispatch(notesActions.createNote())
  }
}

export const NavBar = connect(mapStateToProps, dispatchToProps)(NavBarContainer)
