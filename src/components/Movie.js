import React, { Component } from 'react';
import { Link } from 'react-router';

class Movie extends Component {
  render() {
    return (
      <div className="col-md-4 movie">
        <div className="well text-center">
          <img src={this.props.movie.Poster} alt="" />
          <h5>{this.props.movie.Title}</h5>
          <Link to={`/details/${this.props.movie.imdbID}`} className="btn btn-primary">Movie Details</Link>
        </div>
      </div>
    );
  }
}

export default Movie;
