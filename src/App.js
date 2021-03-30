import React from 'react'
import Header from './Component/Header';
import Hero from './Component/Hero';
import ChoseYourMs from './Component/ChoseYourMs';
import Section2 from './Component/Section2';
import Section3 from './Component/Section3';
import GamePass from './Component/GamePass';
import MSResponse from './Component/MSResponse';
import Holiday from './Component/Holiday';
import Social from './Component/Social';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ChoseYourMs />
      <Section2 />
      <GamePass />
      <Section3 />
      <MSResponse />
      <Holiday />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
