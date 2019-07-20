import React from 'react'

export default function (props) {
  return (
    <ul>
      {
        props.notes.map(note => (
          <li className='notes--menu-item'>
            <div>{ note.title }</div>
          </li>
        ))
      }
    </ul>
  )
}
