import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
      <div className="App">
        <Route path="/" exact render={() => <Home />} />
        <div className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/#search">Search</a></li>
          </ul>
        </div>
      </div>

    </>
  );
}

export default App;
