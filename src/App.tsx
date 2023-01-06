
import './App.css';
import Figure from './components/Figure';
import Footer from './components/Footer';
import Header from './components/Header';
import Notification from './components/Notification';
import PopUp from './components/PopUp';
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
        <PopUp />
        <Notification />
        <Footer />
    </div>
  );
}

export default App;
