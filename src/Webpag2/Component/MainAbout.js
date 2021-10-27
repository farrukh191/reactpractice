import React from 'react';
import logo from '../images/1.jpg';
const MainAbout =()=>{
    return(
        <div className="home1">
            <section className="coll">
            <img className="backgroundimg1"  src={logo}/>
           
        </section>
        <section className="homeleft1">
           
                <h1><span>About Us</span> </h1>
                <p >
                    Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br />
                    <br />
                    Image from Freepi
                </p>
                <button className='lrnbtn1'>Read More</button>
            
        </section>

    </div>
    );
}

export default MainAbout;