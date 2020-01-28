import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component
{
constructor()
{
    super();
    this.state={count: 0}

}
increment()
{
    this.setState({count: this.state.count+1});
}

    render()
    {
        return(
            <div>       
                <h1>Counter = {this.state.count}</h1>
                <button onClick={()=>this.increment()}>increment</button>
        </div>
 
        )

    }

}

export default Counter;