import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarr from './components/navbar';
import Carousel from './components/hero';
import BasicExample from  './components/cardsu';



function App() {
  return (
    <>
    <nav>
      <Navbarr />
    </nav>
 <br/>
    <header>
      <Carousel />
    </header>
    
    <main>
      <BasicExample />
 
    </main>

    <footer>

    </footer>

    </>
  );
}

export default App;
