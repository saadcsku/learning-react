import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component
{
    render()
    {
        const names=["Tom","Dik","Harry"];
        const listNames=names.map((a,b)=> {
        return <li key={b}>{a}</li>

        })

    return <ul>{listNames}</ul>
    
    }
    
}

export default App;