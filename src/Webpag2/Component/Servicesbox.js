import React from 'react';

const Servicebox =(props)=>{
    return(
        <div className="servicebox">
            <img src={props.img} />
            <div className="undercont">
                <h3>{props.title}</h3>
                <p>By painting the doors of your home, you can immediately boost your home’s curb appeal.</p>
            </div>
            </div>
    );
}
export default Servicebox;