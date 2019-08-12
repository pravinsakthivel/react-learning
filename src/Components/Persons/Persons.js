import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    static getDerivedStateFromProps(state,props){
        console.log("In [Persons.js] getDerivedStateFromProps");
        return state;
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("In [Persons.js] shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("In [Persons.js] getSnapshotBeforeUpdate");
        return {message:'Snapshot!'};
    }

    componentDidUpdate(prevProps,prevState,Snapshot){
        console.log("In [Persons.js] componentDidUpdate" , Snapshot);
    }

    render(){
        console.log("In Persons function");
        return this.props.persons.map((person,index) =>{
         return <Person 
         click={()=>this.props.clicked(index)}
         name={person.name}
         age ={person.age}
         key ={person.id}
         change ={(event)=>this.props.changed(event,person.id)}/>
     });
    }
   
}
export default Persons;