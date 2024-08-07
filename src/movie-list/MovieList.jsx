import { Component } from 'react';
import { Spin, Alert } from 'antd';
import { Offline, Online } from 'react-detect-offline';

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

    return (
      <Spin spinning={!isLoaded}>
        <Online>
          <ul className="movie-list">
            {!error ? (
              moviesArray
            ) : (
              <Alert
                message="Error"
                description={`${error.message}`}
                type="error"
              />
            )}
          </ul>
        </Online>
        <Offline>
          <Alert
            message="Error"
            description={`It seems like you're offline`}
            type="error"
          />
        </Offline>
      </Spin>
    );
  }
}
