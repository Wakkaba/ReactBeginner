import React from 'react';
import './Person.css'
import Radium from 'radium'

const person = (props) => {
    const newStyle = {
      '@media (min-width: 500px)': {
          width: '450px'
      }
    };
    const randomError = Math.random();

    if ( randomError > 0.7) {
        throw new  Error ('Custom Error something went wrong');
    }
    return (
        <div className="Person" style={newStyle}>
        <p onClick={props.click}>Hello!This is {props.name} i am: {props.age} old</p>
        <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};
export default Radium(person) ;