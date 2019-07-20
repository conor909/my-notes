import React from 'react'
import './notes-menu.scss'

export default function (props) {
  return (
    <ul className='notes--menu'>
      {
        props.notes.map(note => (
          <MenuItem
            key={note.id}
            isSelected={note.id === props.selectedNoteId}
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
      className={`notes--menu-item ${props.isSelected ? 'active' : ''}`}>
      <div>{ props.title }</div>
      <i className='fas fa-chevron-right' />
    </li>
  )
}
