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
  }

  render() {
    return (
      <div className="post">
        <h3>Add New Item</h3>
        <form>
          Title
          <input type="text" id="title" onChange={this.handleChange}></input>
          <br></br>
          Image
          <input type="text" id="img" onChange={this.handleChange}></input>
          <br></br>
          Units
          <input type="text" id="qty" onChange={this.handleChange}></input>
          <br></br>
          Gardener
          <input type="text" id="user" onChange={this.handleChange}></input>
          <br></br>
          Date Available
          <input type="text" id="date" onChange={this.handleChange}></input>
          <br></br>
        </form>
        <label type="type">Select One:</label>
        <select id="type" onChange={this.handleChange}>
        <option id="type" >-----</option>
          <option id="type" value="free" >Free</option>
          <option id="type" value="trade" >Trade</option>
          <option id="type" value="either" >Either</option>
        </select>
        <button onClick={this.handleClick}>Offer Up</button>

      </div>
    )
  }

}



export default Post;
