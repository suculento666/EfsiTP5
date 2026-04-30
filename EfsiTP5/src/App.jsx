import { useState } from 'react'
import './App.css'
import { searchMovies, getMovieDetail } from './services/api'

import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'
import Modal from './components/Modal'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = (query) => {
    setLoading(true)
    setError(null)

    searchMovies(query)
      .then((res) => {
        if (res.data.Response === "False") {
          setMovies([])
        } else {
          setMovies(res.data.Search)
        }
      })
      .catch(() => {
        setError("Error al buscar")
      })
      .finally(() => {
        setLoading(false)
      })
  };

  const handleSelect = (id) => {
    setLoading(true)
    setError(null)

    getMovieDetail(id)
      .then((res) => {
        setSelectedMovie(res.data)
      })
      .catch(() => {
        setError("Error al cargar detalle")
      })
      .finally(() => {
        setLoading(false)
      })
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      <MovieList movies={movies} onSelect={handleSelect} />

    {selectedMovie && (
  <Modal onClose={() => setSelectedMovie(null)}>
    <MovieDetail movie={selectedMovie} />
  </Modal>
)}
    </>
  )
}

export default App