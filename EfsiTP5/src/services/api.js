import axios from 'axios'

const API_KEY = 'ba6e9b0'
const BASE_URL = 'https://www.omdbapi.com/'

export const searchMovies = (query) => {
  return axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`)
}

export const getMovieDetail = (id) => {
  return axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`)
}