import React from 'react'

class Home extends React.Component{
    render(){
        return(
            <div>
                Home page
                <hr />
                {this.props.name}
            </div>
        );
    }
}

export default Home;