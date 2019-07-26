import React,{useState}  from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {

  var [personState,setPersonState] = useState({
    persons: [
      {name:"ram",age:"26"},
      {name:"pravin",age:"29"}
    ]
  });
  
 const switchNameHandler = () =>{
    console.log("was clicked!");
   setPersonState({
    persons:[
      {name:"sakthi",age:"29"}
    ]
   });
  }
 
    return (
      <div className="App">
        <h1>Hi I'am a react app </h1>
        <button onClick={switchNameHandler}>Switch button</button>
        <Person name ={personState.persons[0].name} age = {personState.persons[0].age}>My Hobby is coding!!!!</Person>
        <Person name ="Pravin" age = "24"/>
  
      </div>
    ); 
  }
   


export default App;
