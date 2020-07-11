import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Things from'./Things'
import Welcome from './Welcome'

const App = () => {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/things">
          <Things />
        </Route>
      </Switch>
  </Router>
  )
}

export default App