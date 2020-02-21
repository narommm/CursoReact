import React from "react";
import {Item} from "./Item";

export const ListStudent = props =>{
    return(
        <div className="">
        
            {props.students.map((student,index)=>{
                return <Item key={student.carnet} {...student}/>
            })}
        </div>
    );
}