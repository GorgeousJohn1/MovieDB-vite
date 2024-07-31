import { Component } from 'react';
import MovieListItem from '../movie-list-item/MovieListItem';
import './MovieList.css';
import MDBService from '../mdb-service';

export default class MovieList extends Component {
  mdb = new MDBService();

  state = {
    error: null,
    isLoaded: false,
    movies: [],
  };

  componentDidMount() {
    this.mdb.getMovies('the way back').then(
      (moviesArray) => {
        this.setState({ isLoaded: true, movies: moviesArray });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }

  render() {
    const { movies, error, isLoaded } = this.state;

    if (error) {
      return <h6>{error.message}</h6>;
    }
    if (!isLoaded) {
      return <h6>LOADING PIDRILA</h6>;
    }

    const moviesArray = movies.map((movie) => (
      <MovieListItem
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        releaseDate={movie.release_date.split('-').join('/')}
        genres={movie.genres}
        overview={movie.overview}
      />
    ));

    return <ul className="movie-list">{moviesArray}</ul>;
  }
}
