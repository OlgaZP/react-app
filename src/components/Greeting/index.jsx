import React from 'react'

function Greeting(props) {
    const { name, isGreeting } = props;
    return (
        <div> 
            {isGreeting ? 'Goodbye' : 'Hello'} {name}!
        </div>
    );
}

export default Greeting; //rfce
