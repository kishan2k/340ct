import React, { Component } from 'react'
import RestaurantSummary from './RestaurantSummary'
export default class RestaurantList extends Component {
  render() {
    return (
        <div className="card-deck row">
        <RestaurantSummary/>
        <RestaurantSummary/>
        <RestaurantSummary/>
        <RestaurantSummary/>
        <RestaurantSummary/>
        <RestaurantSummary/>
        <RestaurantSummary/>
        <RestaurantSummary/>
        <RestaurantSummary/>
        

      </div>
    )
  }
}
