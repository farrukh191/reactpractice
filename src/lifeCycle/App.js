import React from 'react';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      date:new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render(){
    return(
      <div>
        <h4>its time{this.state.date.toLocaleTimeString()}</h4>
      </div>
    )
  }
}


export default App;