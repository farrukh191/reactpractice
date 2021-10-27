import React from 'react';

function Featurebox(props) {
    return(
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} />
            </div>
            <div className='s-b-text'>
                <h2>{props.title}</h2>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.</p>
            </div>

        </div>
    );
}

export default Featurebox;