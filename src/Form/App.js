import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.clickChange=this.clickChange.bind(this);
        this.clickSubmit=this.clickSubmit.bind(this);
        this.state={
            // value:[]
            value:'grapefruit'
        }
    }
    clickChange(event){
        this.setState({
            value:event.target.value
        });
    }
    clickSubmit(event){
        alert('this is your name : '+ this.state.value);
        event.preventDefault();
    }
    render(){
        
        return(
            <div>
                <h1>This is contact form</h1>
                <form onSubmit={this.clickSubmit}>
                    <label>Name</label>
                    <select value={this.state.value} onChange={this.clickChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
                    {/* <input type="text" value={this.state.value} onChange={this.clickChange} /> */}
                    <input type="submit" value="submit" />
                </form>


            </div>
        );
    }
}

export default App;