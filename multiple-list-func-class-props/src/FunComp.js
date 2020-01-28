import React, { Component } from 'react';
import ReactDOM from 'react-dom';


function FuncComp(props)
{
    const employees=props.val;
    const Listemployees=employees.map((a)=>{
    return <li>Name: {a.name}, ID: {a.id}, Age: {a.age}, Status {a.status}. Sibling {a.siblings}</li>
    });

return(
<div>
    <h3>Data coming from Functional Component</h3>  
<ul>{Listemployees}</ul>
</div>  
    )

}
export default FuncComp;

