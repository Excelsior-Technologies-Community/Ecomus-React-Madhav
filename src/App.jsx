import { useState } from 'react';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
