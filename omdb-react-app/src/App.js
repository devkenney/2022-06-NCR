import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import { useState, useEffect } from 'react'

const randomMovies = [
  "Benjamin Button",
  "Forrest Gump",
  "Babes in Toyland",
  "The Matrix",
  "Earth Girls are Easy",
  "Deadpool"
]

function App() {

  const apiKey = process.env.REACT_APP_API_KEY

  const [movie, setMovie] = useState(null)

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovie(randomMovies[Math.floor(Math.random() * randomMovies.length)]);
  }, [])

  return (
    <div className="App">
      <MovieDisplay movie={movie} />
      <Form moviesearch={getMovie} />
    </div>
  );
}

export default App;
