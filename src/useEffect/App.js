import React, { useState, useEffect } from "react";

// class App extends React.Component{
// constructor(props){
//     super(props);

//     this.state={
//         count:0,
//     }
// }

// componentDidMount() {
//     document.title = `You clicked ${this.state.count} times`;
//     console.log(this.state.count)
//   }


// // jb dom render hojayga tb ye value update krega componentdidmount

//   componentDidUpdate() {
//     document.title = `You clicked ${this.state.count} times`;
//     console.log(this.state.count);
//   }

//     render(){
//         return(
//             <React.Fragment>
//                 <p>{this.state.count}</p>
//                 <button onClick={()=>this.setState({count:this.state.count + 1})} >update count value
//                 </button>
//             </React.Fragment>
//         );
//     }
// }



// ab hm yhi code function component m dusri method se dekhenge


const App = () =>{

const [count, setCount]= useState(0);

// useEffect class component me jo 2 function h componentdidMount and componentdidUpdate dono ka kam ye eksat
//krsakta h wow
//  By default, it runs both after the first render and after every update. 

useEffect(()=>{
    console.log(count);
    var ch = count;
})

    return(
        <div>
            <p>this counter is update when button is clicked {count}</p>
            <button onClick={()=>setCount(count + 1)}>click me</button>
        </div>
    );
}



export default App;