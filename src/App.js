import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard.js'
import RestaurantDetails from './components/resaurants/RestaurantDetails'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/' component={Dashboard} />
          <Route path='/restaurant/:id' component={RestaurantDetails} />
        </Switch>
        <Dashboard/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
