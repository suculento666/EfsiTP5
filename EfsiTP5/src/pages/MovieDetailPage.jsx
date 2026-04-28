import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getMovieDetail } from '../services/api'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import MovieDetail from '../components/MovieDetail'

export default function MovieDetailPage() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    setError(null)

    getMovieDetail(id)
      .then((res) => {
        if (res.data?.Response === 'False') {
          setError(res.data?.Error || 'No se encontró la película')
          setMovie(null)
        } else {
          setMovie(res.data)
        }
      })
      .catch(() => setError('Error al cargar detalle'))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <main style={{ padding: 16 }}>
      <Link to="/">← Volver</Link>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {movie && <MovieDetail movie={movie} />}
    </main>
  )
}
