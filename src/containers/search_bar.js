import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // Bind the Context
    // Bind this and its function on class to 
    // the new instance of the function
    this.onInputChange = this.onInputChange.bind(this);
  }

  // Called by event handler
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <form className="input-group">
        <input 
          placeholder="Get a five-day weather forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
