import { MovieCard } from './MovieCard'

import {MovieProps, GenreResponseProps} from '../App'

interface SideBarProps {
  movies: MovieProps[],
  selectedGenre: GenreResponseProps,
}

export function Content({movies, selectedGenre}: SideBarProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}