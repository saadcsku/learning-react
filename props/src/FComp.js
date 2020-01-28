import React from 'react';
import ReactDOM from 'react-dom';

const FComp = (props) => <div> <h1>{props.title}</h1> <h2>This Component is made by {props.author}</h2>

<h3> {props.children} </h3>
<br/>
</div>; 


export default FComp;