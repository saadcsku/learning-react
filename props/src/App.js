import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FComp from './FComp';
import CComp from './CComp';

class App extends Component
{
    render()
    {
        return(
            <div>
            <FComp title="This is a functional Component" author="Saad" >
            <p>This is a child of Functional Component</p>
            </FComp>
            <CComp  title="This is a class Component" author="Wasi">
            <p>This is a child of Class Component</p>
            </CComp>
            </div>
        );

    }

}
export default App;