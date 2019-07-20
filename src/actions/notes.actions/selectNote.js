import { notesConstants } from '../../constants'

export default function selectNote (noteId) {
  return {
    type: notesConstants.NOTE_SELECT,
    noteId
  }
}
