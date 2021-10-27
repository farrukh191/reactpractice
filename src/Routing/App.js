import React from 'react'
import About from './Component/About'
import Home from './Component/Home'
import Contact from './Component/Contact'
import './style.css';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'


class App extends React.Component{
    render(){
        return(
            <div className='container'>
              
               <div className='Router'>
               <Router>
                   <div className='postion'>
                   <Link className='link' to="/">Home </Link>
                   <Link className='link' to="About"> About us </Link>
                   <Link className='link' to="Contact"> Contact us</Link>
                   </div>
                   
                   <h1>               
                   {/* <Route exact path="/" component={Home} />
                   <Route path="/About" component={About} />
                   <Route path="/Contact" component={Contact} /> */}


                  <Route exact path="/" ><Home name='farrukh Home' /></Route>
                   <Route path="/About" ><About name='farrukh About' /></Route>
                   <Route path="/Contact" ><Contact name='farrukh Contact' /></Route>
                   </h1>
 
               </Router>
               </div>
            </div>
        );
    }
}

// install library of npm install react-router-dom

export default App;