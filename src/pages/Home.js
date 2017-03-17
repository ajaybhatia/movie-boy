import React, { Component } from 'react';
import axios from 'axios';

//components
import SearchBox from '../components/SearchBox';
import Movie from '../components/Movie';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchCount: 0,
      movies: [],
    };
  }

  getMovies(text) {
    if (text !== "") {
      axios.get('http://www.omdbapi.com?s=' + text)
        .then((response) => {
          let movies = response.data.Search;
          this.setState({
            value: text,
            searchCount: movies.length,
            movies: movies,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Movie Boy</h1>
          <p>Online Movies Directory</p>
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <SearchBox value={this.state.value} onChange={this.getMovies.bind(this)} />
            </div>
          </div>
        </div>
        <div>
          {this.state.movies.map((movie, index) => {
            return (<Movie key={movie.imdbID} movie={movie} />);
          })}
        </div>
      </div>
    );
  }
}

export default Home;
