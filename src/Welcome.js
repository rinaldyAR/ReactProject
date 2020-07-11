import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './App.css';
export default function Welcome(){
    return (
    <div className="App">
        <header className="App-header">

        <h1 style={{color:"white"}}>Selamat Datang di Aplikasi Penjualan</h1>
        <h3 style={{color:"white"}}>Silakan memilih menu:</h3>
        <Link to="/things">Pendataan Pembelian Barang</Link>
        <Link to="/beli">Daftar Penjualan Barang</Link>
        </header>
    </div>
    );
}