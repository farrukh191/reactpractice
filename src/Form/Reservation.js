import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
this.handleChange=this.handleChange.bind(this);
        this.state={
            isGoing:true,
            numberOfGuest:2
        }
    }

handleChange(event){
    const target=event.target;
    const value=target.type === 'checkbox' ? target.checked : target.value;
    const name=target.name;

    this.setState({
        [name]:value
    });
}

    render(){
        return(
            <div>
                <h2>seat reservation code here</h2>
                <form>
                    <label>
                        Is Going
                        <input type='checkbox' name='isGoing' checked={this.state.isGoing}  onChange={this.handleChange} />
                        
                    </label>
                    <br />
                    <label>
                        number Of Guest:
                        <input type='number' name='numberOfGuest' value={this.state.numberOfGuest} onChange={this.handleChange} />
                    </label>
                </form>
            </div>
        );
    }
}

export default App;