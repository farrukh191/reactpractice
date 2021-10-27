import React from 'react'
import Feature from './Feature'

function FeatureBox(){
    return(
        <div className='feature'>
            <div className='a-container'>
                <Feature />
                <Feature />
                <Feature />
                <Feature />
            </div>
        </div>
    );
}

export default FeatureBox;