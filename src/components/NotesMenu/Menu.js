import React from 'react'

export default function (props) {
  return (
    <ul>
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
