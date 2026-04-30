export default function MovieDetail({ movie }) {
  if (!movie) return null

  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>

      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}
        alt={movie.Title}
      />

      <p><b>Año:</b> {movie.Year}</p>
      <p><b>Género:</b> {movie.Genre || "No disponible"}</p>
      <p><b>Director:</b> {movie.Director || "No disponible"}</p>
      <p><b>Actores:</b> {movie.Actors || "No disponible"}</p>
      <p><b>Duración:</b> {movie.Runtime || "No disponible"}</p>
      <p><b>Idioma:</b> {movie.Language || "No disponible"}</p>
      <p><b>País:</b> {movie.Country || "No disponible"}</p>
      <p><b>IMDb:</b> {movie.imdbRating || "No disponible"}</p>
      <p><b>Sinopsis:</b> {movie.Plot || "No disponible"}</p>
    </div>
  )
}