import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Mstyles from './css.module.css'

class App extends Component
{  

    
    render()
    {
        const css={
            color: "red",
            fontSize: "40px",
            textAlign: "center"

   } 
        return (
            <React.Fragment>
                <h1 style={css}>Hello World</h1>
                <h2 className="underl">This is from Css file</h2>
                <h3 className={Mstyles.underline}>This is from a seperate Css file</h3>
            </React.Fragment>
        );

    }


}
export default App;