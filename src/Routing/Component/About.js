import React from 'react'

class About extends React.Component{
    render(){
        return(
            <div>
                About us page
                <hr />
                {this.props.name}
            </div>
        );
    }
}

export default About;