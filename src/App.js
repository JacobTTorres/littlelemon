import React from 'react';
import './style.css';

import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
