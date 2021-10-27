import React from 'react';
import FeatureBox from './Featurebox.js';
import Featureimage1 from '../images/feature_1.png';
import Featureimage2 from '../images/feature_2.png';
import Featureimage3 from '../images/feature_3.png';

function Feature(params) {
    return(
        <div id='features'>
            <div className='a-container'>
                <FeatureBox image={Featureimage1} title='Development Course' />
                <FeatureBox image={Featureimage2} title='Blockchain Course' />
                <FeatureBox image={Featureimage3} title='Ethical Hacking Course' />
            </div>
        </div>
    );
}

export default Feature;