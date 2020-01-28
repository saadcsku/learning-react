import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import FuncComp from './FunComp';
import Classcomponents from './Classcomponents';

class App extends Component
{


    render()
    {
        const employees=[{
                    name: "saad",
                    id:    20,
                    age:   31,
                    siblings: 3,
                    status: "active"
        },{
                    name: "was1",
                    id:    19,
                    age:   20,
                    siblings: 4,
                    status: "active"
        }]

        return (
            <React.Fragment>
                <FuncComp val={employees} />
                <Classcomponents val2={employees} />
            </React.Fragment>
        )

    }

}
export default App;