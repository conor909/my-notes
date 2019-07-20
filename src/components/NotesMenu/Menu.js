import React from 'react'
import './notes-menu.scss'

export default function (props) {
  return (
    <ul className='notes--menu'>
      {
        props.notes.map(note => (
          <MenuItem
            key={note.id}
            title={note.title}
            id={note.id}
            onSelectNote={props.onSelectNote} />
        ))
      }
    </ul>
  )
}

function MenuItem (props) {
  function handleSelectNote () {
    props.onSelectNote(props.id)
  }
  return (
    <li
      onClick={handleSelectNote}
      className='notes--menu-item'>
      <div>{ props.title }</div>
    </li>
  )
}
