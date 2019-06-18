import React, { Component } from 'react';
import './App.css';

import MovieList from './Components/movieList.js';

class App extends Component {
  render() {
    return (
      <div>
        <h2>update?</h2>
        <div className="info">
          <MovieList />
        </div>
      </div>
    );
  }
}

export default App;
