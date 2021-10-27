import React, {useState} from 'react';

function App(){

    const [count, setCount]=useState(0);
    
    return(
        <React.Fragment>
            <div>
                <p>{count}</p>
                <button onClick={()=>{setCount(count + 1)}}>click to change</button>


            </div>
        </React.Fragment>
    );
}

export default App;