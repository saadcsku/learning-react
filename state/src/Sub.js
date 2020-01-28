import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Sub extends Component
{
    constructor()
    {
        super()
        this.state={msg: "Welcome Saad"};   
    }
    changeState()
    {
        this.setState({msg: "Thank you for Subscribing"});
    }

    render()
    {
    return (
        <div> 
            <h1>{this.state.msg}</h1> 
            <button onClick={()=>this.changeState() }>Subscribe</button>
        </div>
        )


    }
    

}
export default Sub;