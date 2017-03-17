import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  onChange(e) {
    this.setState({value: e.target.value}, () => {
      this.props.onChange(this.state.value);
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control"
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}

export default SearchBox;
