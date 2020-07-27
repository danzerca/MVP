import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Post from './components/Post.jsx';
import Exchange from './components/Exchange.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avail: []
    };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    var state = this;
    $.ajax('/items', {
      method: 'GET',
      dataType: 'json',
      success: (next) => {
        state.setState({ avail: next });
      }
    });
  }

  updateItem(entry) {
    if (entry.qty-1 < 1) {
      $.ajax('/items', {
        method: 'DELETE',
        dataType: 'json',
        data: entry,
        success: function(next) {
          console.log('...deleted');
        }
      })
    } else {
      $.ajax('/items', {
        method: 'PATCH',
        dataType: 'json',
        data: entry,
        success: function(next) {
          console.log('UDPATED!!');
        }
      })
    }
  }

  handleSubmit(newEntry) {
    var state = this;
    $.ajax('/items', {
      method: 'POST',
      dataType: 'json',
      data: newEntry,
      success: function(next) {
        console.log('Created: ', next);
      }
    });
  }


  render() {
    return (
      <div>
        <h1>Welcome to GarSHAREden!</h1>
        <Post onSubmit={this.handleSubmit} onRefresh={this.getItems}/>
        <Exchange items={this.state.avail} onUpdate={this.updateItem} onRefresh={this.getItems}/>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));