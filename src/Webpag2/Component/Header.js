import React from 'react'
import logo1 from '../images/gfb.jpg';
import logo from '../images/v-min.png';
import FeatureBox from './Featurebox';
import Navbar from './Navbar';


const Header = () => {
    return (
        <div >
            <Navbar />
            <div className="home">
                <section className="homeleft">
                   
                        <h1>Home Repair <span>& Renovation</span> </h1>
                        <p>
                            Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            <br />
                            <br />
                            Image from Freepi
                        </p>
                        <button className='lrnbtn1'>Read More</button>
                    
                </section>
                <section >
                    <img className="backgroundimg" src={logo1} />
                    <img className="logoo" src={logo} />
                </section>
                

            </div>
            
            <FeatureBox />

        </div>
    );
}

export default Header;