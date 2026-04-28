export default function MovieCard({ movie, onSelect }) {
  return (
    <div 
      onClick={() => onSelect(movie.imdbID)}
     
    >
      <img 
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"} 
        alt={movie.Title}
       
      />

      <h3>{movie.Title}</h3>
      <p>Año: {movie.Year}</p>
      <p>Tipo: {movie.Type}</p>
    </div>
  )
}