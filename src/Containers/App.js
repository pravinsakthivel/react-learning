import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons.js';

class App extends Component {

  constructor(props){
    super(props);
    console.log("In Constructor");
  }
  state = {
    persons: [
      { id: "1", name: "ram", age: "26" },
      { "id": "2", name: "pravin", age: "29" }
    ],
    showPersons: false
  }
  static getDerivedStateFromProps(state,props){
    console.log("getDerived state from props: "+JSON.stringify(props));
    return state;
  }

  togglePersonsHandler = () => {
    console.log("In toggle handler");
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonshandler = (personIndex) => {
    //const person = this.state.persons.splice();
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({ persons: person });
  }

  onChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "ram", age: "26" },
        { name: event.target.value, age: "29" }
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    console.log("in name change")
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    console.log("personIndex" + personIndex);
    const person = {
      ...this.state.persons[personIndex]
    }
    console.log(person)
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // console.log(persons);
    this.setState({
      persons: persons
    })
  }
  componentDidMount(){
    console.log("Inside component did Mount");
  }
  render() {
    // Inline styles
   
    const style = {
      backgroundColor: 'green',
      color: 'white',
      padding: '15px',
      border: '1px solid blue',
      cursor: 'pointer'
      

    }
    let personsSection = null;
    if (this.state.showPersons) {
      personsSection = (
        <div>
          <Persons 
            persons ={this.state.persons}
            clicked = {this.deletePersonshandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
      style.backgroundColor = "red";
     
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red")
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      
      <div className="App">
        {/* below code onClick={()=>this.switchNameHandler("Ram Pravin")} may be ineffective
        recommended to use is click={this.switchNameHandler.bind(this,"Sakthivel")}  */}
        <p className={classes.join(" ")}>This is working</p>
        <button style={style} onClick={this.togglePersonsHandler.bind(this)}>Switch button</button>
        {personsSection}




      </div>
     
    );
  }

}

export default App;
