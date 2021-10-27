import React from 'react';


function App() {
    function handleClick(e) {
// e.preventDefault anchor tag m jo link dya howa h us page m jane se rok deta h

     e.preventDefault();
      alert('The link was clicked.');
    }
  
    return (
      <a href="https://reactjs.org/docs/events.html" onClick={handleClick}>
        Click me
      </a>
    );
  }

export default App;