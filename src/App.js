import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';

function App() {
  return (
    <>
      <div className="App">
        <Route path="/" exact render={() => <Home />} />
        <div className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>
        </div>
        <main>
          <Route path="/search" render={() => <Search />} />
        </main>
      </div>

    </>
  );
}

export default App;
