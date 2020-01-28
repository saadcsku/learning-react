import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MemberList from './MemberList';

class Members extends Component
{

    render()
    {
     const members=[
         {name: "saad", id: 20, memberStatus: "active"},
         {name: "mubeen", id: 25, memberStatus: "unactive"}
        ]
        
        return (
            <React.Fragment>
                <MemberList val={members}/>
            </React.Fragment>

        )


    }
}
export default Members;
