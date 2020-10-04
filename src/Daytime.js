import React from 'react';

export function Daytime(props){
    return(
    <h3>Good {props.isMorning ? 'Morning' : 'Night'}</h3>)
};