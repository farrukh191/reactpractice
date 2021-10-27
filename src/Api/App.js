import React from 'react';
import axios from 'axios'
import './App.css';
   
class App extends React.Component {

state={
  temp:[],
  weather:[],
  country:[],
  city:[],
  loading:true
}

async componentDidMount(){
  // agr hr city ka temperature find krna hoto niche dye api m ja kr city name change krdenge to hojayga

  const resp=await axios.get("http://api.openweathermap.org/data/2.5/weather?q=karachi&appid=661ab286aa7f9a06cefc19f287156765");
  console.log(resp);
 
 this.setState({temp:resp.data.main});
 this.setState({weather:resp.data.weather[0]});
 this.setState({country:resp.data.sys});
 this.setState({city:resp.data});
 this.setState({loading:false})
 
}

  render() {
    const teperature=this.state.temp.temp;
    const celsius=teperature - 273.15;
    if (this.state.loading) {
      return <h1>Loading...</h1>
    }


    return (
      <div className="container">
       <h5>Today Temperature of {this.state.city.name }</h5>
       <h1>Temp : {celsius} 'C</h1>
       <h2>Weather : {this.state.weather.main}</h2>
       <h3>Country : {this.state.country.country}</h3>
       <h4>City : {this.state.city.name }</h4>
      </div>
    );
  }
}

export default App;
