import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Editor, EditorState, RichUtils } from 'draft-js'
import 'draft-js/dist/Draft.css'
import './editor.scss'

export default function (props) {
  const note = props.note
  const [editorState, setEditorState] = useState(getNoteState(props.note))
  const [noteTitle, setNoteTitle] = useState(note.title)

  useEffect(() => {
    setNoteTitle(note.title)
  }, [note])

  function getNoteState (note) {
    if (!note.note) {
      return EditorState.createEmpty()
    } else {
      return note.note
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

  return (
    <div className='editor'>
      <Form.Control
        type='text'
        value={noteTitle}
        className='editor--title-input'
        onChange={onChangeTitle} />
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType} />
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle} />
      <Editor
        handleKeyCommand={handleKeyCommand}
        editorState={editorState}
        onChange={handleChangeEditorState}
        blockStyleFn={getBlockStyle}
        customStyleMap={styleMap}
        onTab={onTab}
        placeholder='Tell a story...'
        spellCheck />
      {
        note.note !== editorState &&
        <Button
          variant='outline-success'
          onClick={props.onSaveNote}>
          Save
        </Button>
      }
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

function StyleButton (props) {
  function onToggle (e) {
    e.preventDefault()
    props.onToggle(props.style)
  }

  let className = 'RichEditor-styleButton'
  if (props.active) {
    className += ' RichEditor-activeButton'
  }

  return (
    <span className={className} onMouseDown={onToggle}>
      {props.label}
    </span>
  )

}

var INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' }
];

const InlineStyleControls = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle()
  return (
    <div className='RichEditor-controls'>
      {
        INLINE_STYLES.map(type =>
          <StyleButton
            key={type.label}
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        )
      }
    </div>
  )
}

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },
]

const BlockStyleControls = (props) => {
  const { editorState } = props
  const selection = editorState.getSelection()
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()

  return (
    <div className='RichEditor-controls'>
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  )
}
