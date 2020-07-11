import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Welcome(){
    return (
    <div>
        <h2>Welcome</h2>
        <Link to="/things">Pendataan barang</Link>
    </div>
    );
}