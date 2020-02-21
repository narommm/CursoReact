import React, { Component } from "react";
import {Form} from "./Form";
import {Item} from "./Item";
import './App.css';
import { ListStudent } from "./ListStudent";

const initState ={
  name:"",
  lastname:"",
  carnet:"0000",
  tarde:false
};

class App extends Component {

  constructor(props){
    super(props);
    this.state ={...initState, students:[]}
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
}

submitHandler(event){
  event.preventDefault();
  const {name, lastname, carnet, tarde} =this.state;
  const students = [...this.state.students];
  students.push({
       name, lastname, carnet, tarde
  }); 
  console.log(students);
  
  this.setState({
       //Limpia las cajas de texto tomando el estado inicial del form
       ...initState,
       students  
  });
}


changeHandler(event){
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.id;
  this.setState({[name]:value});
}

  render (){
    const {name,lastname,carnet,tarde} = this.state;
    return( 
      <div className="App">
      <header className="App-header">
      <h1>Administrador de Tarea</h1>
      </header>
      <Form name={name} lastname={lastname} carnet={carnet} tarde={tarde} submitHandler={this.submitHandler} changeHandler={this.changeHandler}/>
      <ListStudent students={this.state.students} />
      </div>
  );
  }
}

export default App;
