import React from 'react';

function SignIn(props) {
    return(
        <h2>this is login page</h2>
    )
}

function SignUp(props) {
    return(
        <h2>this is SignUp page</h2>
    )
}

function App(props) {
   
    const isLoggedIn=props.name;
    if (isLoggedIn) {
        return <SignIn />
    } else {
        return <SignUp />
    }
    
}

export default App;