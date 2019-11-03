import React from 'react';

const Bouton = props => {
    const handleClick = () => {
        console.log("boujour");
    };
    return (
        <button onClick={props.handleClick || handleClick}>{props.value}</button>
    );
}

export default Bouton;