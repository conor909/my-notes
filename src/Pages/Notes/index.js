import React from 'react'
import './notes.scss'
import { Container, Row, Col } from 'react-bootstrap'

// TODO Layout scaffolding

export function Notes () {
  return (
    <Container fluid className='notes'>
      <Row noGutters>
        <Col md={4} className='notes--menu d-none d-md-block'>
          <ul>
            <li className='notes--menu-item'>
              <div>{'Title'}</div>
              <div>{'>'}</div>
            </li>
          </ul>
        </Col>
        <Col md={8} className='notes--editor'>
          <h1>Title</h1>
        </Col>
      </Row>
    </Container>
  )
}