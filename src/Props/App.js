import React from 'react';



function Welc(props) {
    return <h2>Hy, {props.name}</h2>;
}


function App() {
    return(
        <div>
            <Welc name="Ali" />
            <Welc name="Asad" />
            <Welc name="Farrukh" />
            <Welc name="Asad" />
            
        </div>
        
    );
}


export default App;

