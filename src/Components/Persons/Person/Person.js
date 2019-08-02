import React from 'react';
import './Person.css'

const person =(props)=>{


    return (
        <div className="Person" >
        <p onClick={props.click}>I am a person, name is {props.name},my age is {props.age} </p> 
        {props.children}   
        <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    );

}

export default person;