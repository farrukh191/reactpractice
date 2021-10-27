import React from 'react';

function About(props) {
    return(
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt='image' />
            </div>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p className='txt'>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                graphic or web designs. The passage is attributed to an unknown
                </p>
                <button>{props.button}</button>
            </div>
        </div>
    );
}

export default About;