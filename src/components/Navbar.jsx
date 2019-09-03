import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/search" render={() => <Search />} />
      </div>
    </>
  )
}