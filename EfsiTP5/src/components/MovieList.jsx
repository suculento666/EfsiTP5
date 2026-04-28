movies.map(movie => (
  <MovieCard key={movie.imdbID} movie={movie} onSelect={onSelect} /> // renderizado de las tarjetas de película utilizando el componente MovieCard, pasando la información de cada película y la función onSelect como props
))