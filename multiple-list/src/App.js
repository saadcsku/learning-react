import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';

class App extends Component
{
    render()
    {
       const members=[
           {id: 10, name:"saad", age:32 },
           {id: 22, name:"maaz", age:25}
    ]
        const Listmembers=members.map((a)=>{
        return <li>My id is {a.id}, name is {a.name} and my age is {a.age}</li>
        })

    return(<ul>{Listmembers}</ul>)
    }
}
export default App;