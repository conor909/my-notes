import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NotesMenu, NotesEditor } from '../../components'
import './notes.scss'

export function Notes () {
  return (
    <Container fluid className='page notes'>
      <Row noGutters className='page--content'>
        <Col md={4} className='page--side-content d-none d-md-block'>
          <NotesMenu />
        </Col>
        <Col md={8} className='page--main-content'>
          <NotesEditor />
        </Col>
      </Row>
    </Container>
  )
}
