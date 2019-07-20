import { createSelector } from 'reselect'

const notesSelector = state => state.notes.notes
const selctedNoteIdSelector = state => state.notes.selectedNoteId

const getNoteBySelectedId = createSelector(
  notesSelector,
  selctedNoteIdSelector,
  (notes, selectedId) => {
    if (selectedId) return notes.filter(note => note.id === selectedId)[0]
    return { id: null, title: '', body: '' }
  }
)

export const notesSelectors = {
  getNoteBySelectedId
}
