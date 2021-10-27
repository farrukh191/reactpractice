import React from 'react';


// ye simple mapping h

// function App(props) {
//     const numbers=props.number;
//     const list= numbers.map((number)=> <li>{number}</li>)
//     return(
//         <div>
//             <ul>{list}</ul>
//         </div>
//     );
// }


function ListItems(props) {
    return <li>{props.value}</li>;
}


function App(props) {
    const numbers = props.number;
    const list = numbers.map((number) => <ListItems key={number.toString()} value={number ** 3} />);

    return (
        <ul>
            {list}
        </ul>
    );

}

export default App;