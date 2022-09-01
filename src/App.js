import React from 'react';
import './App.css';
import CollapsibleExample from './components/navbar';
import Carousel from './components/hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from  './components/cardsu';

function App() {
  return (
    <>
    <nav>
      <CollapsibleExample />
    </nav>
 
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
