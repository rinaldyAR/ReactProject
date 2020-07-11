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
  //App.js berfungsi untuk menandai routing dari setiap halaman
  //default link adalah halaman welcome yang menampilkan halaman awal
  //jika user mengakses /things, langsung diarahkan menuju halaman pencatatan pembelian barang
  
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