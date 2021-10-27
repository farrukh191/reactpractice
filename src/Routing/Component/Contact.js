import React from 'react'

class Contact extends React.Component{
    render(props){
        return(
            <div>
                Contact page 
                <hr />
                {this.props.name}
            </div>
        );
    }
}

export default Contact;