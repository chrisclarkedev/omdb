import React from 'react';
import { Link, Route } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="/#search">Search</a></li>
        </ul>
      </div>
    </>
  )
}