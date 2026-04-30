export default function MovieCard({ movie, onSelect }) {
  return (
    <div className="movie-card" onClick={() => onSelect(movie.imdbID)}>
      <div className="poster-wrap">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x420"}
          alt={movie.Title}
        />
      </div>

      <div className="card-info">
        <h3>{movie.Title}</h3>
        <p className="meta">{movie.Year} · {movie.Type}</p>
      </div>
    </div>
  )
}