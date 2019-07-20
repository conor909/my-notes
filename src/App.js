import React from 'react'
import './App.scss'
import { history } from './helpers'
import { Router, Route, Switch } from 'react-router-dom'
import { Notes } from './Pages'
import { NavBar } from './components'

function App () {
  return (
    <Router history={history}>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Notes} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
