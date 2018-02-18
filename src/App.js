import React, {Component} from 'react';
import './App.css';
import Persons from './Persons/Persons';

class App extends Component {
    state = {
        persons : [
            {id: 'asdf' ,name: 'Samuel', age: 32},
            {id: 'asdf2' ,name: 'Selam', age: 34},
            {id: 'asdf3' ,name: 'Noah', age: 1.5}
        ],
        person: {
            name: '',
            age: 0
        }
    };

    handleNameChange = (evt) => {
       let p = {...this.state.person};
       p.id = this.state.persons.length + 1 + '-' + evt.target.value;
       p.name = evt.target.value;

        this.setState({
           person:p
       });
    };

    handleAgeChange = (evt) => {
        let p = {...this.state.person};
        p.age = evt.target.value;

        this.setState({
            person: p
        });
    };

    onPersonAdded = () => {
        let p = {...this.state.person};

        this.setState({
            persons: this.state.persons.concat(p),
            person:{
                name: '',
                age: 0
            }
        });
    };

    onPersonDeleted = (index) => {
        let persons = [...this.state.persons];
        persons.splice(index, 1);

        this.setState({
            persons: persons
        });
    };

    onNameChanged = (evt, id) => {
        let persons = [...this.state.persons];
        let idx = persons.findIndex(p => {
            return p.id === id;
        });

        let person = persons[idx];

        person.name = evt.target.value;
        persons[idx] = person;

        this.setState({
            persons: persons
        });
    };


	render() {
	    let myFamily = <Persons persons={this.state.persons}
                                nameChanged={this.onNameChanged}
                                click={this.onPersonDeleted} />;

		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
                <div className="add">
                    <label>Person name</label>
                    <input type="text"
                           value={this.state.person.name}
                           onChange={this.handleNameChange}/>
                    <label>Person age</label>
                    <input type="text"
                           value={this.state.person.age}
                           onChange={this.handleAgeChange}/>

                    <button className="add-btn"
                            onClick={this.onPersonAdded}>Add</button>
                </div>
                {myFamily}
            </div>
		);
	}
}

export default App;
