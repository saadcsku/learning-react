import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MemberList extends Component
{
    render()
    {
       const Listmembers=this.props.val;
       const comListmembers=Listmembers.map((a)=>{
       return <li>My name is {a.name}, my age is {a.id} and my status is {a.memberStatus}</li>
       }); 
       
    return (<ul>{comListmembers}</ul>);

    }

}
export default MemberList;