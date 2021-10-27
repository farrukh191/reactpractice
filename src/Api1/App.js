import React from 'react'
import Detail from './Detail'
import Country from "./Country";
import './App.css'

class App extends React.Component {
  render(){
    return(
      <div className="body">
        <h1 className="glo">Globally Track</h1>
        <Detail />
        <Country />
      </div>
    )
  }
}

export default App;
