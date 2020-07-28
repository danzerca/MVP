import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Post from './components/Post.jsx';
import Search from './components/Search.jsx';
import Exchange from './components/Exchange.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avail: [],
      results: ['Results']
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

  getUSDA(item) {
    var state = this;

    $.ajax('/items/USDA', {
      method: 'GET',
      dataType: 'json',
      data: item,
      success: (info) => {
        var value = [];
        info[0].foodNutrients.map(each => {
          var entry = each.nutrientName + ': ' + each.value + ' ' + each.unitName;
          value.push(entry);
        });
        state.setState({ results: value });
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
        <div className="full-header">
          <h1 className="header">Welcome to GarSHAREden!</h1>
          <h3 className="sub-header">a place where community gardeners can exchange and offer produce and garden tools</h3>
        </div>

        <Post onSubmit={this.handleSubmit} onRefresh={this.getItems.bind(this)}/>
        <Search onSearch={this.getUSDA.bind(this)} onRefresh={this.getItems.bind(this)} searchResults={this.state.results}/>
        <Exchange items={this.state.avail} onUpdate={this.updateItem} onRefresh={this.getItems.bind(this)}/>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));