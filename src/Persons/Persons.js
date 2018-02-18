import React from 'react';
import Person from "./Person/Person";

const persons = (props) => props.persons.map((person, key) => {
    return <Person key={person.id}
                   name={person.name}
                   age={person.age}
                   nameChanged={props.onNameChanged}
                   update={props.onUpdate}
                   click={props.onPersonDeleted} />
});

export default persons;