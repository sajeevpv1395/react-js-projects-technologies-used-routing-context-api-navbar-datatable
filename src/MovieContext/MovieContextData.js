import React from 'react'
import AddMovies from './AddMovies'
import { MovieProvider } from './MovieContext'
import MovieList from './MovieList'
import Nav from './Nav'

function MovieContextData() {
  return (
    
      <MovieProvider>
<Nav/>
<AddMovies/>
<MovieList/>

      </MovieProvider>
    
  )
}

export default MovieContextData

