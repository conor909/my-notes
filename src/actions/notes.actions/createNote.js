import { notesConstants } from '../../constants'
import uuid from 'uuid/v4'

export default function createNote () {
  return {
    type: notesConstants.NOTE_CREATE,
    newNote: {
      id: uuid(),
      title: 'New Note',
      body: ''
    }
  }
}
