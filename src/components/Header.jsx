import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <section class="sec1"> <img src={require('./images/pic1.jpeg')} /></section>
      <h5 className="banner-title2">Search for your favorite movie</h5>
      {/* <div className="banner">
        <img src={require('./images/pic1.jpeg')} />
      </div> */}
    </header>
  )
};