import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    };
  }

  componentDidMount() {
    const imdbID = this.props.params.imdbID;
    axios.get('http://www.omdbapi.com?i=' + imdbID)
      .then((response) => {
        this.setState({movie: response.data});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="row image-detail">
          <div className="col-md-4">
            <img src={this.state.movie.Poster} className="thumbnail" alt="" />
          </div>
          <div className="col-md-8">
            <h2>{this.state.movie.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item"><strong>Genre:</strong> {this.state.movie.Title}</li>
              <li className="list-group-item"><strong>Released:</strong> {this.state.movie.Released}</li>
              <li className="list-group-item"><strong>Rated:</strong> {this.state.movie.Rated}</li>
              <li className="list-group-item"><strong>IMDB Rating:</strong> {this.state.movie.imdbRating}</li>
              <li className="list-group-item"><strong>Director:</strong> {this.state.movie.Director}</li>
              <li className="list-group-item"><strong>Writer:</strong> {this.state.movie.Writer}</li>
              <li className="list-group-item"><strong>Actors:</strong> {this.state.movie.Actors}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="well">
            <h3>Plot</h3>
            {this.state.movie.Plot}
            <hr />
            <a href={`http://imdb.com/title/${this.state.movie.imdbID}`} target="_blank" className="btn btn-primary">View IMDB</a>
            <Link to="/" className="btn btn-default">Go Back To Search</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
