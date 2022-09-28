export default ({ movie }) => {
  return (
    <>
      <h2>{!movie ? "No Movie To Display" : null}</h2>
      <h1>{movie?.Title}</h1>
      {/* {movie ? movie.Title : null} */}
      <h2>{movie?.Genre}</h2>
      <img src={movie?.Poster} alt={movie?.Title} />
      <h2>{movie?.Year}</h2>
    </>
  )
}