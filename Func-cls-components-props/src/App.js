import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ClsComponent from './ClsComponent';
import FunComponent from './FunComponent';

class App extends Component
{
constructor()
{
    super();
    this.state={sub: "You are not Subscriibed"}
}
subscribed()
{
    this.setState({sub: "You are  Subscriibed now"});
}

    render()
    {
        return(
            <React.Fragment>
                <ClsComponent val="This is a Class Component"/>
                <FunComponent val="This is a Functional Component"/>
                <h1>{this.state.sub=="You are not Subscriibed" ?<button onClick={()=>this.subscribed()}>Click to Subscribed</button>: "" }</h1>

            </React.Fragment>

        )
    }

}
export default App;