import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.handleChange= this.handleChange.bind(this);
    this.handleClick= this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({search: e.target.value});
  }

  handleClick() {
    this.props.onSearch(this.state.search);
    this.props.onRefresh();
  }

  render() {
    var curr = this;
    return (
      <div className="search-box">
        <div className="search">
            <label>Search the USDA Website</label>
          </div>
          <div className="search-input">
            <input type="text" id="query" onChange={this.handleChange}></input>
          </div>
          <div className="search-button-div">
            <button className="search-button" onClick={this.handleClick}>Search</button>
          </div>
          <div className="search-results">
            <div type="text" id="results">
              {curr.props.searchResults.map((each) => (<span >{each}</span>))}

            </div>
          </div>


      </div>
    )
  }
}

export default Search;