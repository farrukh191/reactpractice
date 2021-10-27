import React, { Component } from 'react';
import About from './Component/About';
import Header from './Component/Header';
import Help from './Component/Help';
import MainAbout from './Component/MainAbout';
import Service from './Component/Services';
import  './style.css';

class App extends Component {
    render() {
        return (
            <div className='body'>
                <Header />
                <About />
                <Help />
                <Service />
                <MainAbout />
            <p>https://nicepage.com/one-page-template/preview/home-renovating-technology-71369?device=desktop</p>
            </div>
        );
    }
}

export default App;