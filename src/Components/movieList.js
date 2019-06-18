import React from 'react';
import axios from 'axios';

export default class MovieList extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    axios.get('https://healthypotatoes.herokuapp.com/movies')
    .then(res => {
      console.log(res);
      this.setState({ movies: res.data });
    });
  }

  render() {
    return (
      <ul>
      {this.state.movies.map(movie => <li>{ movie.title } </li>) }
      </ul>
    )
  }
}
