
import './App.css';
import Figure from './components/Figure';
import Footer from './components/Footer';
import Header from './components/Header';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="game-container">
           <Figure />
           <WrongLetters />
           <Word />
        </div>
        <Footer />
    </div>
  );
}

export default App;
