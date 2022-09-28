import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import { useState } from 'react'

function App() {

  const apiKey = process.env.REACT_APP_API_KEY

  const [movie, setMovie] = useState(null)

  const getMovie = async (searchTerm) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
    const data = await response.json();
    setMovie(data);
  }

  return (
    <div className="App">
      <MovieDisplay movie={movie} />
      <Form moviesearch={getMovie} />
    </div>
  );
}

export default App;
