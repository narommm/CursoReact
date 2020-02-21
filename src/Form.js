import React from "react";
import "./Form.css";

//Se reciben props, la informacion de state
export const Form = props =>{
    const {name, lastname, carnet, tarde,changeHandler,submitHandler} = props;
    return (
        <form onSubmit={submitHandler}>
            <input onChange={changeHandler} id="name" placeholder = "Nombre" value={name}/>
            <input onChange={changeHandler} id="lastname" placeholder = "Apellido" value={lastname}/>
            <input onChange={changeHandler} id="carnet" placeholder = "Carnet" value={carnet}/>
            <input type="checkbox" onChange={changeHandler} id="tarde" placeholder = "Tarde?" value={tarde}/>
            <button type="submit" > Guardar Alumno</button>
        </form>)
}