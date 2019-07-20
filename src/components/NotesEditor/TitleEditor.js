import React from 'react'
import { Form } from 'react-bootstrap'

export default function TitleEditor (props) {
  return (
    <Form.Control
      type='text'
      value={props.title}
      className='editor--edit-title'
      onChange={props.onChange} />
  )
}
