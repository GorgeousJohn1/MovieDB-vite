import { PropTypes } from 'prop-types';
import { format } from 'date-fns';
import MDBService from '../mdb-service';
import './MovieListItem.css';

export default function MovieListItem({
  title = 'Default',
  poster = null,
  releaseDate = null,
  // genres,
  overview = 'Default',
}) {
  const posterUrl =
    poster === null
      ? '../../public/jakob-owens-rEuVRj7qCbU-unsplash.jpg'
      : `https://image.tmdb.org/t/p/w500${poster}`;
  const releaseDateModified =
    releaseDate === ''
      ? 'Unknown release date'
      : format(releaseDate, 'MMMM d, yyyy');

  return (
    <div className="movie-list-item">
      <div className="movie-list-item__poster">
        <img src={posterUrl} alt="#" />
      </div>
      <div className="movie-list-item__info">
        <h2>{title}</h2>
        <p className="movie-list-item__release">{releaseDateModified}</p>
        <ul className="movie-genres">
          <li>Action</li>
          <li>Drama</li>
        </ul>
        <p className="movie-list-item__overview">
          {MDBService.cutText(overview, 34)}
        </p>
      </div>
    </div>
  );
}

MovieListItem.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  releaseDate: PropTypes.string,
  overview: PropTypes.string,
};
