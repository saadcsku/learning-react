import React, { Component } from 'react';
import ReactDOM from  'react-dom';

class Classcomponents extends Component
{

    render()
    {
        const members2=this.props.val2;
        const Listmembers2=members2.map((a)=>{
        return <li>Name:{a.name}, ID:{a.id}, Age: {a.age}, Status: {a.status}, Siblings: {a.siblings} </li>
        })
        return(
            <div>
                <h3>Data coming from Class Components</h3>
                <ul>{Listmembers2}</ul>
            </div>
        )
    }
}
export default Classcomponents;