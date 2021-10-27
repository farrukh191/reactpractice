import React from 'react';
import Header from './Component/Header.js'
import Feature from './Component/Feature.js'
import Presentaton from './Component/Presentation.js'
import About from './Component/About.js';
import Contact from './Component/Contact.js';
import Aboutimg from './images/Frame 19.png';
import Aboutimg1 from './images/download.png';

import './style.css';

class App extends React.Component{
    render(props){
        return(
            <div className="App">
                <Header />
                <Feature />
                <About image={Aboutimg} title='Comes With All You Need For Daily life' button='Get The App' />
                <Presentaton />
                <About image={Aboutimg1} title='Download And Get The App Now' button='Download' />
                <Contact />
            </div>
        );
    }
}

export default App;