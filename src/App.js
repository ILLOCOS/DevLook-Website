import logo from './logo.svg';
import './App.css';
import BasicExample from './components/navbar';
import Carousel from './components/hero';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <nav>
      <BasicExample />
    </nav>

    <header>
      <Carousel />
    </header>
    
    <main>
 
    </main>

    <footer>

    </footer>

    </>
  );
}

export default App;
