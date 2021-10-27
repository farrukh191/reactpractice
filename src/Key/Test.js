import React from 'react'

function Test (props) {
    const posts=[
        {id: 1, title: 'web development', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];
    const listing=posts.map((nums) => <li>{ nums.title }</li> )
    return(
        <div>
            <p>hello world</p>
            <ul>
                {listing}
            </ul>
            
        </div>
    );
}

export default Test;