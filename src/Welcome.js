import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './App.css';

//merupakan halaman default atau halaman awal
//page ini menampilkan:
//1. ucapan selamat datang 
//3. menampilkan list menu yang mengarahkan user ke tampilan/menu lainnya
class Welcome extends React.Component {
    render(){
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
  }
export default Welcome