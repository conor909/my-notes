import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Editor, EditorState, RichUtils, convertFromRaw, convertToRaw } from 'draft-js'
import BlockStyleControls from './BlockStyleControls'
import InlineStyleControls from './InlineStyleControls'
import TitleEditor from './TitleEditor'
import 'draft-js/dist/Draft.css'
import './editor.scss'

export default function (props) {
  const note = props.note
  const [editorState, setEditorState] = useState(getNoteState(props.note))
  const [noteTitle, setNoteTitle] = useState(note.title)

  useEffect(() => {
    setNoteTitle(note.title)
    setEditorState(getNoteState(note))
  }, [note])

  function getNoteState (note) {
    if (note.note) {
      return EditorState.createWithContent(convertFromRaw(JSON.parse(note.note)))
    } else {
      return EditorState.createEmpty()
    }
  }

  function onChangeTitle (e) {
    setNoteTitle(e.target.value)
  }

  function handleChangeEditorState (newState) {
    setEditorState(newState)
  }

  function handleKeyCommand (command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      handleChangeEditorState(newState)
      return true
    }
    return false
  }

  function getBlockStyle (block) {
    switch (block.getType()) {
      case 'blockquote':
        return 'RichEditor-blockquote'
      default: return null
    }
  }

  function onTab (e) {
    const maxDepth = 4
    handleChangeEditorState(RichUtils.onTab(e, editorState, maxDepth))
  }

  function toggleInlineStyle (inlineStyle) {
    handleChangeEditorState(
      RichUtils.toggleInlineStyle(
        editorState,
        inlineStyle
      )
    )
  }

  function toggleBlockType (blockType) {
    handleChangeEditorState(
      RichUtils.toggleBlockType(
        editorState,
        blockType
      )
    )
  }

  function handleSaveNote () {
    props.saveNote({
      id: props.note.id,
      note: getContentString(),
      title: noteTitle
    })
  }

  function getContentString () {
    const contentState = editorState.getCurrentContent()
    return JSON.stringify(convertToRaw(contentState))
  }

  const hasBeenEdited = getContentString() !== props.note.note || noteTitle !== props.note.title

  return (
    <div className='editor'>
      <TitleEditor
        title={noteTitle}
        onChange={onChangeTitle} />
      <div className='editor--edit-styles'>
        <BlockStyleControls
          editorState={editorState}
          onToggle={toggleBlockType} />
        <InlineStyleControls
          editorState={editorState}
          onToggle={toggleInlineStyle} />
      </div>
      <div className='editor--edit-note'>
        <Editor
          handleKeyCommand={handleKeyCommand}
          editorState={editorState}
          onChange={handleChangeEditorState}
          blockStyleFn={getBlockStyle}
          customStyleMap={styleMap}
          onTab={onTab}
          placeholder='Tell a story...'
          spellCheck />
      </div>
      <Button
        disabled={!hasBeenEdited}
        variant='outline-success'
        onClick={handleSaveNote}>
        Save
      </Button>
    </div>
  )
}

const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
}
