import React from 'react';
import './Person.css';

const person = (props) => {
  return (
      <div className="Person">
          <p>I'm {props.name} my age is {props.age}</p>
          <p>{props.children}</p>
          <hr/>

          <input type="text"
                 onChange={props.nameChanged}/>

          <button className="add-btn"
                  onClick={props.update}>Update</button>
          <button onClick={props.click}>Del</button>
      </div>
  )
};

export default person;