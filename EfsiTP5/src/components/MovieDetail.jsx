export default function MovieDetail({ movie }) {
  return (
    <div style={{ marginTop: 20 }}>
      <h2>{movie.Title}</h2>

      <img 
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"} 
        alt={movie.Title}
      />

      <p><b>Año:</b> {movie.Year}</p>
      <p><b>Género:</b> {movie.Genre || "No disponible"}</p>
      <p><b>Director:</b> {movie.Director || "No disponible"}</p>
      <p><b>Actores:</b> {movie.Actors || "No disponible"}</p>
      <p><b>Sinopsis:</b> {movie.Plot || "No disponible"}</p>
      <p><b>Duración:</b> {movie.Runtime || "No disponible"}</p>
      <p><b>Idioma:</b> {movie.Language || "No disponible"}</p>
      <p><b>País:</b> {movie.Country || "No disponible"}</p>
      <p><b>IMDb:</b> {movie.imdbRating || "No disponible"}</p>
    </div>
  )
}