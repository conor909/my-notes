import React from 'react'
import './App.scss'
import { Notes } from './Pages'
import { NavBar } from './common-components'

function App () {
  return (
    <div className='App'>
      <NavBar />
      <Notes />
    </div>
  )
}

export default App
