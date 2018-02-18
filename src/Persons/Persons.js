import React from 'react';
import Person from "./Person/Person";

const persons = (props) => props.persons.map((person, index) => {
    return <Person key={person.id}
                   name={person.name}
                   age={person.age}
                   nameChanged={(e) => props.nameChanged(e, person.id)}
                   click={() => props.click(index)} />
});

export default persons;