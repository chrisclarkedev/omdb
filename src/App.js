import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Search />
    </div>
  );
}

export default App;
