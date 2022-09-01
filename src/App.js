import logo from './logo.svg';
import './App.css';
import BasicExample from './components/navbar';
import CarouselFadeExample from './components/hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import review from './components/review';

function App() {
  return (
    <>
    <nav>
      <BasicExample />
    </nav>
    <header>
      <CarouselFadeExample />
    </header>

    <review />
    
    <main>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </main>
    <footer>
    </footer>
    </>
  );
}
export default App;
