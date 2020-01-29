import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Navigation from './Navigation';
import { HomeComponents, ProductComponents, AboutComponents } from './components';


class App extends Component
{
    render()
    {

        return(
                 <React.Fragment>
                        <Router>
                            <Navigation />
                                <Route exact path="/">
                                    <HomeComponents />
                                </Route>
                                <Route exact path="/about">
                                    <AboutComponents />
                                </Route>
                                <Route exact path="/product">
                                    <ProductComponents />
                                </Route>

                        </Router>

                 </React.Fragment>   
        );
    }

}

export default App;
