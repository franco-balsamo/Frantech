import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Parallax from './components/parallax/Parallax';
import Planes from './components/planes/Planes';
import ScrollUp from './components/scrollup/ScrollUp';
import Mision from './components/mision/Mision';
import Wsp from './components/wsp/Wsp';
import Parallax2 from './components/parallax2/Parallax2';
import "./App.css";
import Novedades from './components/novedades/Novedades';

function App() {

  return (
    <div>
      <Navbar />
    <main className='main'>
      <Header />
      <Wsp />
    <About />
    <Parallax />
    <Mision />
    <Planes />
    <Parallax2 />
    <Contact />
    <Novedades />
    </main>
    <Footer />
    <ScrollUp />
    </div>
  );
}

export default App;
