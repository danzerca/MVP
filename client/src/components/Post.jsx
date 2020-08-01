import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
      user: undefined,
      img: undefined,
      qty: undefined,
      date: undefined,
      type: undefined
    };
    this.handleChange= this.handleChange.bind(this);
    this.handleClick= this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.id]: e.target.value});
  }

  handleClick() {
    this.props.onSubmit(this.state);
    this.props.onRefresh();
  }

  render() {
    return (
      <div className="grid-container">
        <h3 className="item1">Add New Item</h3>
        <div className="item2">
          <select id="type" onChange={this.handleChange}>
          <option id="type" >Select One</option>
            <option id="type" value="Free" >Free</option>
            <option id="type" value="Trade" >Trade</option>
            <option id="type" value="Either" >Either</option>
          </select>
        </div>
          <div className="item3">
            <label>Title</label>
          </div>
          <div className="item4">
            <input type="text" id="title" onChange={this.handleChange}></input>
          </div>
          <div className="item5">
            <label>Image</label>
          </div>
          <div className="item6">
            <input type="text" id="img" onChange={this.handleChange}></input>
          </div>
          <div className="item7">
            <label>Units</label>
          </div>
          <div className="item8">
            <input type="text" id="qty" onChange={this.handleChange}></input>
          </div>
          <div className="item9">
            <label>Gardener</label>
          </div>
          <div className="item10">
            <input type="text" id="user" onChange={this.handleChange}></input>
          </div>
          <div className="item11">
            <label>Date Available</label>
          </div>
          <div className="item12">
            <input type="text" id="date" onChange={this.handleChange}></input>
          </div>
      <div className="item13">
        <button className="post-button" onClick={this.handleClick}>Offer Up</button>
      </div>
      </div>
    )
  }
}

export default Post;