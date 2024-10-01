import React from 'react';

import MovieCard from '../movie-card';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <section className="app">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </section>
    );
  }
}

export default App;
