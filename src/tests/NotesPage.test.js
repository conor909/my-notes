
import React from 'react'
import { expect } from 'chai'
import { Notes as NotesPage } from '../Pages'
import { NotesMenu, NotesEditor } from '../components'
import { shallow } from 'enzyme'

describe('Test HomePage component', () => {
  it('renders a list of notes', () => {
    const children = shallow(<NotesPage />)
    expect(children.find(NotesMenu)).to.have.length(1)
  })

  it('renders a note editor', () => {
    const children = shallow(<NotesPage />)
    expect(children.find(NotesEditor)).to.have.length(1)
  })
})
