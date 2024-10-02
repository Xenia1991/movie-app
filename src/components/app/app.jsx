import React from 'react';

import MovieList from '../movie-list';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <section className="app">
        <MovieList />
      </section>
    );
  }
}

export default App;
