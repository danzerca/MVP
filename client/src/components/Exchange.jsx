import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Exchange extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(entry) {
    this.props.onUpdate(entry);
    this.props.onRefresh();
  }

  render() {
    var curr = this;
    return (
    <div className="exchange-container">
      {curr.props.items.map((each) => (
          <span className="list-item" >
            <div className="item-title">{each.title}</div>
            <img className="item-image" src={each.img} />
            <div className="item-qty">Available units: {each.qty}</div>
            <div className="item-date">Date available: {each.date}</div>
            <div className="item-type">{each.type}</div>
            <div className="item-user">{each.user}</div>
            <button className="claim" onClick={curr.handleClick.bind(this, each)}>Claim</button>
          </span>
        ))}

      </div>
    )
  }
}

export default Exchange;