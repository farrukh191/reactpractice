import React from 'react';
import Servicebox from './Servicesbox';
import logo from '../images/1.jpg';
import logo1 from '../images/2.jpg';
import logo2 from '../images/3.jpg';

const Service=()=>{
    return(
        <div className="service">
            <div className="underbor">
                <h1>POPULAR SERVICES</h1>
                <p>
                As a customer-focused solution provider, we’re dedicated
                to redefining the home improvement service experience for homeowners and commercial property owners.
                </p>
            </div>
        <div className="boxwid">
             <Servicebox img={logo} title="Door Painting" />
             <Servicebox img={logo1} title="Garbage Disposal" />
             <Servicebox img={logo2} title="Plumbing Service" />
        </div>
            
             
        </div>
    );
}

export default Service;