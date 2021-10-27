import React from 'react'
import '../index.css';

class LoginOut extends React.Component {

  constructor(props) {
    super(props);
    this.handlelogout=this.handlelogout.bind(this);
    this.handlelogin=this.handlelogin.bind(this);
    this.state = {
      IsLoggedIn: false
    };
  }

  handlelogin() {
    this.setState({IsLoggedIn: true});
  }
handlelogout(){
    this.setState({IsLoggedIn:false});
}

  render() {

    const IsLoggedIn = this.state.IsLoggedIn;
    let button;
if (IsLoggedIn) {
  button=<Logoutbutton onClick={this.handlelogout} />;
}
else{
  button=<Loginbutton onClick={this.handlelogin} />;
}


    return (
      <div className="container">
        <div className="loginout">
        {button}
        </div>
        <div className="bodyy">
        <Greeting check={IsLoggedIn} />
        </div>
        
        
      </div>
    )
  }
}

function Greeting(props) {
  const check=props.check;
  if (check) {
    return <Signin />;
  }
  else{
    return <Signup />;
  }
}


function Signin(props) {
  return(
    <div className="signin">
<h1>welcome to login page</h1>
    </div>
    
  );
}
function Signup(props) {
  return(
    <div className="signup">
<h1>Goto signup page</h1>
    </div>
    
  );
}
 


function Logoutbutton(props) {
  return(
    <button onClick={props.onClick} >logout</button>
  );
}

function Loginbutton(props) {
  return(
    <button onClick={props.onClick} >login</button>
  );
}

export default LoginOut;
