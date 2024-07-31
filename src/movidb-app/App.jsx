import Header from '../header/Header';
import MovieList from '../movie-list/MovieList';
import Paggination from '../paggination/Paggination';
import Footer from '../footer/Footer';

import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <MovieList />
      <Paggination />
      <Footer />
    </div>
  );
}
