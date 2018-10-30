import React, { Component } from 'react'

export default class RestaurantSummary extends Component {
  render() {
    return (
        <div className="col-sm-4">
        <div className="card">
        <img className="card-img-top" src="https://via.placeholder.com/300x180" alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      </div>
    )
  }
}
