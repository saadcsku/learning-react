import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';

function Navigation()
{
    return(

       <ul>
           <li><Link to="./">Home</Link></li>
           <li><Link to="./about">About</Link></li>
           <li><Link to="./product">Products</Link></li>

       </ul>
    )

}

export default Navigation;
