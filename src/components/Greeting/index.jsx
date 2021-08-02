import React from 'react';
import PropTypes from 'prop-types';

function Greeting(props) {
    const { name, isGreeting } = props;
    return (
        <div> 
            {isGreeting ? 'Goodbye' : 'Hello'} {name}!
        </div>
    );
}

Greeting.propTypes = {
    //помечаем обязательное свойсво
    name: PropTypes.string.isRequired,
    isGreeting: PropTypes.bool,
};

Greeting.defaultProps = {
    isGreeting: true,
};

export default Greeting; //rfce
