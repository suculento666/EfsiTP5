import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({ movies = [], onSelect }) {
  if (!movies || movies.length === 0) {
    return <p>No hay resultados para mostrar.</p>
  }

  return (
    <section className="movie-list" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12}}>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onSelect={onSelect} />
      ))}
    </section>
  )
}
