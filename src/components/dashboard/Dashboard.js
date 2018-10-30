import React, { Component } from 'react'
import RestaurantList from '../resaurants/RestaurantList'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <RestaurantList/>
      </div>
    )
  }
}
