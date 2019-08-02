import React,{Component}  from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state={
    persons: [
      {name:"ram",age:"26"},
      {name:"pravin",age:"29"}
    ]
  }
  switchNameHandler = (newName) =>{
    console.log("was clicked!");
    this.setState({
      persons:[
        {name:newName,age:"29"},
        {name:"pravin",age:"29"}

      ]
    });
  }

  onChangeHandler =(event) =>{
    this.setState({
      persons:[
        {name:"ram",age:"26"},
        {name:event.target.value,age:"29"}
      ]
    })
  }
    render(){
    // Inline styles
      const style = {
        backgroundColor : 'white',
        padding:'15px',
        border:'1px solid blue',
        cursor:'pointer'

      }
    return (
      <div className="App">
        <h1>Hi I'am a react app </h1>
        {/* below code onClick={()=>this.switchNameHandler("Ram Pravin")} may be ineffective
        recommended to use is click={this.switchNameHandler.bind(this,"Sakthivel")}  */}
        <button style={style} onClick={()=>this.switchNameHandler("Ram Pravin")}>Switch button</button> {}
        {/* Passing method reference between objects */}
        <Person name ={this.state.persons[0].name} age = {this.state.persons[0].age} click={this.switchNameHandler.bind(this,"Sakthivel")}>My Hobby is coding!!!!</Person>
        <Person name ="Pravin" age = "24"/>
        <Person name ={this.state.persons[1].name} age={this.state.persons[1].age} change={this.onChangeHandler.bind(this)}></Person>
  
      </div>
    ); 
  }
   
}

export default App;
