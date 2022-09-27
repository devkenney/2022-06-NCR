import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Header />
      <Player whichPlayer="X" />
      <Player whichPlayer="O" />
      <Board />
    </div>
  );
}

export default App;
