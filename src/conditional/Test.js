import React, { Component } from 'react';

class Test extends Component {
    constructor(props){
        super(props);
        this.handlelogin=this.handlelogin.bind(this);
        this.handlelogout=this.handlelogout.bind(this);
        
        this.state={
            islogin:false
        }
    }

handlelogin(){
    this.setState({islogin:false});
}

handlelogout(){
    this.setState({islogin:true});
}

   
    render() {
        const isloggin=this.state.islogin;
        let button;
        if (isloggin) {
            button=<LoginBtn onclick={this.handlelogin} />;
        }
        else{
            button=<LogoutBtn onclick={this.handlelogout} />;
        }

        return (
            <div>
                <h1>for practicing</h1>
                {button }
                <Greeting check={isloggin} />
            </div>
        );
    }
}

function LoginBtn(props) {
    return(
        <button onClick={props.onclick}>Login</button>
    );
}

function LogoutBtn(props) {
    return(
        <button onClick={props.onclick}>Logout</button>
    );
}

function SignIn(props) {
    return(
        <div>
            <h2>Sign In page</h2>
        </div>
    );
}


function SignOut(props) {
    return(
        <div>
            <h2>Sign Out page</h2>
        </div>
    );
}

function Greeting(props) {
    const Cond=props.check;
    if (!Cond) {
        return <SignIn />;
    } else {
        return <SignOut />;
    }
}



export default Test;