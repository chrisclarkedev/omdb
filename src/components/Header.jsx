import React from 'react';

export default function Header() {
  return (
    <header>
      <section class="sec1"> <img src={require('./images/pic1.jpeg')} /></section>
      <h2 className="banner-title1">Search for your favorite movies.</h2>
      <h3 className="banner-title2">OMDb API</h3>
    </header>
  )
};