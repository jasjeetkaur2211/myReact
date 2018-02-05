import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Jass', age: 27},
            {name: 'Aman', age: 29},
        ]
    }

    switchNameHandler = (newName) => {
      //console.log('Was clicked')
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: 'Jass', age: 27},
                {name: 'Aman', age: 29},
            ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 27},
                {name: 'Aman', age: 29},
            ]
        })
    };
   render() {
       const style = {
         backgroundColor: 'white',
           font: 'inherit',
           border: '1px solid blue',
         padding: '8px',
           cursor: 'pointer'
       };

    return (
      <div className="App">
       <h1>
           Hey! My first React App
       </h1>
       <button
            style={style}
           onClick={() => this.switchNameHandler('Maxine')}>Switch Name</button>
       <Person
           name={this.state.persons[0].name}
           age={this.state.persons[0].age}/>
       <Person
           name={this.state.persons[1].name}
           age={this.state.persons[1].age}
           click={this.switchNameHandler.bind(this, 'Maximillian')}
            changed={this.nameChangedHandler}>
           My Hobbies: Racing
       </Person>
       <Person
           name={this.state.persons[2].name}
           age={this.state.persons[2].age}/>
      </div>
    );
  //     return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This works?'));
  }
}

export default App;
