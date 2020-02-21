import React from "react";
//import {container,sub} from "./Item.module.css";

export const Item = props =>{
  const {name, lastname, carnet, tarde} = props;
  return(
    <div className="">
      <div className="">
        <h4>Nombre:</h4>
        <h4>{`${name}${lastname}`}</h4>
      </div>
      <div className="">
        <span>Carnet: {carnet}</span>
        <span>Tarde: {tarde}</span>
      </div>
    </div> 
  )
}
