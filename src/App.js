import React, { Component } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import WeatherList from './components/WeatherList';
import City from './components/City';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      data5Days: {},
      data16Days: {}
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <City city={this.state.data5Days.city} />
          <WeatherList data5Days={this.state.data5Days.list} data16Days={this.state.data16Days.list}/>
        </div>
      </Router>
    );
  }

  fetch5DaysData() {
    let city = "Jakarta,ID";
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&units=metric&APPID=8b8926b398fdba5ce76701d649c783f8`;
    Axios.get(url)
      .then((response) => {
        this.setState({
          cityData: response.data.city,
          data5Days: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  fetch16DaysData() {
    let city = "Jakarta,ID";
    let url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=16&APPID=8b8926b398fdba5ce76701d649c783f8`
    Axios.get(url)
      .then((response) => {
        this.setState({
          data16Days: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  componentDidMount() {
    this.fetch5DaysData();
    this.fetch16DaysData();
  }

}

export default App;
