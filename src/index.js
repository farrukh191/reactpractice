import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 import Blog from './Key/AdvcKey';
//import App from './Api1/App';
// import App from './hook/App.js';
import App from './useEffect/App.js';
//import App from './Props/App.js';
//import App from './lifeCycle/App.js'
//import ONOFF from './handlevent/ONOFF.js'
//import AdvForm from './Form/AdvForm.js'
//import AdvForm from './Form/AdvForm1';
 //import LoginOut from './conditional/LoginOut';
// import Test from './conditional/Test';
//import App from './Webpag2/App';
// import App from './Key/App.js'
// import Test from './Key/Test.js'
//import Calculator from './celsiusCalc/Conversion.js'
//import App from './celsiusCalc/Test.js'
//import App from './todo/App.js';
//import App from './webpage/App.js';
//import App from './Routing/App.js';
//import App from './Calculator/App.js';
// ReactDOM.render(<App name={false} />,document.getElementById('root'));
const numbers=[1,2,3,4,5,6,7,8,9];
//ReactDOM.render(<App number={numbers} />,document.getElementById('root'));
//ReactDOM.render(<Test number={numbers} />,document.getElementById('root'));

const posts=[
    {id: 1, title: 'web development', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

// ReactDOM.render(<Blog post={posts} /> ,document.getElementById('root'));
//ReactDOM.render(<App/> ,document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render(<LoginOut/>,document.getElementById('root'));

//ReactDOM.render(<Test />,document.getElementById('root'));