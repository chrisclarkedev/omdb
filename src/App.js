import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Home from './components/Home';
// import Header from './components/Header';
// import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className="App">
        <div className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/#search">Search</a></li>
          </ul>
          <main>
            <Route path="/" exact render={() => <Home />} />
          </main>
        </div>
      </div>

    </>
  );
}

export default App;
