import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
import MovieDetails from './components/MovieDetails'
import SearchBar from './components/SearchBar'
import { fetchMovies, fetchMovieDetails } from './api/movies'
import api from './services/api'


function App() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = (query) => { 
    setLoading(true)
    setError(null)

    searchMovies(query) // Llamada a la función de búsqueda
      .then((res) => { // Manejo de la respuesta
        if (res.data.Response === "False") { // Si la respuesta es negativa, se limpia la lista de películas
          setMovies([])
        } else { // Si la respuesta es positiva, se actualiza la lista de películas con los resultados obtenidos
          setMovies(res.data.Search) 
        }
      })
      .catch(() => { 
        setError("Error al buscar")
      })
      .finally(() => { 
        setLoading(false)
      })
  }
  
const handleSelect = (id) => {
  setLoading(true)

  getMovieDetail(id) // Llamada a la función de detalle de película
    .then((res) => {
      setSelectedMovie(res.data) // Actualización del estado selectedMovie con los detalles de la película obtenidos
    })
    .catch(() => {
      setError("Error al cargar detalle")
    })
    .finally(() => {
      setLoading(false)
    })
}

<SearchBar onSearch={handleSearch} /> // Renderizado del componente SearchBar, pasando la función handleSearch como prop para manejar la búsqueda de películas

{loading && <Loader />} 
{error && <ErrorMessage message={error} />}

<MovieList movies={movies} onSelect={handleSelect} />

{selectedMovie && <MovieDetail movie={selectedMovie} />}
}

export default App
