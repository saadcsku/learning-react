import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CComp extends Component
{
    render()
    {
    return(
    <div>
    <h1>{this.props.title}</h1>
    <h2>This Component is made by {this.props.author}</h2>
    <h3> {this.props.children} </h3>
    </div>
)
    }

}
export default CComp;