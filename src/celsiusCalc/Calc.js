import React from 'react'



function Boilingverdict (props) {
    if (props.celsius > 100) {
        return <p>water is boiled</p>;
    } else {
        return <p>water is not boiled</p>;
    }
}

class App extends React.Component{
    constructor(props){
        super(props);

        this.handleChange=this.handleChange.bind(this);
 
        this.state={
            temperature:'',
        }
    }

    handleChange(e){
        this.setState({
            temperature:e.target.value
        })
    }


    render(props){  
        const temperature=this.state.temperature;     
        return(
            <div>
                <h1>Temperature Calculator {temperature}</h1>
            <fieldset>
                <legend>Enter Temperature in Celsius</legend>
                <input value={temperature} onChange={this.handleChange} />
                
                <Boilingverdict celsius={parseFloat(temperature)} />

            </fieldset>

            
               
            </div>
        );
    }
}

export default App;