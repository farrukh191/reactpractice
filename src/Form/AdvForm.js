import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fname:'',
            lname:''
            
        }
        this.clickChange=this.clickChange.bind(this);
        this.clickSubmit=this.clickSubmit.bind(this);
    }
    clickSubmit(event){
        const {fname,lname}=this.state;
        alert('this is your name : '+ fname +" "+ lname +' ' );
        event.preventDefault();
        
    }

    clickChange(event){

        this.setState({
          [event.target.name]:event.target.value
            
        })
    }
   
    render(){
        
        return(
            <div>
                <h1>This is contact form</h1>
                <form onSubmit={this.clickSubmit}>
                    <label>
                    First Name
                    <input type="text" name="fname" value={this.state.fname} onChange={this.clickChange} />
                    </label>
                    <hr />
                    <label>
                    Last Name
                    <input type="text" name="lname" value={this.state.lname} onChange={this.clickChange} />
                    </label>
                    <hr />
                    <button>Create Account</button>
                    {/* <input type="submit" value="submit" /> */}
                </form>


            </div>
        );
    }
}

export default App;