import React from 'react';

export default function Header() {
  return (
    <header>
      <section className="sec1"> <img src={require('./images/pic1.jpeg')} /></section>
      <h1 className="banner-title1">Search for your favorite movies.</h1>
      <h1 className="banner-title2">OMDb API</h1>
    </header>
  )
};