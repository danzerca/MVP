import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Post from './components/Post.jsx';
import Exchange from './components/Exchange.jsx';
const entries = [
  {
    title: 'Rhubarb Cuttings',
    user: 'Garden Queen',
    img: 'https://imgur.com/AFDpOKv.png',
    qty: 1,
    date: 'May 1, 2020',
    type: 'Free'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avail: entries
    };



  }

  handleSubmit(e) {
    console.log(e);
  }


  render() {
    return (

      <div>
        <h1>Welcome to GarSHAREden!</h1>
        <Post onSubmit={this.handleSubmit}/>
        <Exchange items={this.state.avail}/>

      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));