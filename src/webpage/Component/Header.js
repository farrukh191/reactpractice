import React from 'react';
import Navbar from './Navbar.js';

function Header(){
    
        return(
            <div id='main'>
                <Navbar />
                <div className='name'>
                    <h1><span>Launch your App </span> With Confidence and Creativity</h1>
                    <p className='details'>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.
                    </p>
                    <a href="#" className='cv-btn' >Download</a>
                </div>
            </div>
        );
    
}

export default Header;