import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'

export function NavBar (props) {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>Notes</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <a>{'link'}</a>
          <a>{'link'}</a>
        </Nav>
        <Button variant='outline-success'>+ Create</Button>
      </Navbar.Collapse>
    </Navbar>
  )
}
