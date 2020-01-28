import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Listview extends Component
{
    render()
    {
        const newArr= this.props.val;
        const ListnewArr= newArr.map((a,b)=>{
            return <li key={b}>{a}</li>
        })
        return(
                <ul>{ListnewArr}</ul>
        )
    }

}

export default Listview     ;