import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

import React from 'react';
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Navbar />
      <main className="App-body">
        <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/About' element = {<About />}></Route>
          <Route path='/Contact' element = {<Contact />}></Route>
        </Routes>
      </main>
      </header>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
