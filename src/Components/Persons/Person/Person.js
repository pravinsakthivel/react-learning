import React ,{Component}from 'react';
import './Person.css'

class Person extends Component{
    render(){
        console.log("In person method")
        return (
            <div className="Person" >
            <p onClick={this.props.click}>I am a person, name is {this.props.name},my age is {this.props.age} </p> 
            {this.props.children}   
            <input type="text" onChange={this.props.change} value={this.props.name}></input>
            </div>
        );
    }
    

}

export default Person;