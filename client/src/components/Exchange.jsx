import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const Exchange = (props) => (
  <div className="exchange">
   {props.items.map((each) => (
      <span className="list-item" >
        <div className="item-title">{each.title}</div>
        <img className="item-image" src={each.img} width="200" height="200"/>
        <div className="item-qty">Available units: {each.qty}</div>
        <div className="item-date">Date available: {each.date}</div>
        <div className="item-type">{each.type}</div>
        <div className="item-user">{each.user}</div>
      </span>
    ))}

  </div>
)

export default Exchange;