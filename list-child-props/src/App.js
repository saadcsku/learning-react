import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Listview from './ListView';


class App extends Component
{
    render()
    {
        const arr=[22,10,223,11];
        return (


            <React.Fragment>
                    <Listview val={arr} />
            </React.Fragment>
        )
    }

}

export default App;