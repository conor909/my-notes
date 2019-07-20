import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NotesMenu from './Menu'
import './notes.scss'

export function Notes (props) {
  return (
    <Container fluid className='page notes'>
      <Row noGutters className='page--content'>
        <Col md={4} className='notes--menu d-none d-md-block'>
          <NotesMenu />
        </Col>
        <Col md={8} className='notes--editor'>
          <h1>Title</h1>
        </Col>
      </Row>
    </Container>
  )
}
