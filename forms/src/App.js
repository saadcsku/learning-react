import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class App extends Component
{
constructor()
{
    super();
    this.state={
                name: "",
                email: "",
                message: "",
                status: "Single",
                country: "Pakistan"
    }
}
handleNameSubmission(e)
{
    this.setState({
            name:e.target.value,
    })
}
handleEmailSubmission(e)
{
    this.setState({
            email:e.target.value

    })
}
handleMessageSubmission(e)
{
    this.setState({
        message:e.target.value

    })
}
handleStatusSubmission(e)
{
    this.setState({
        status:e.target.value

    })
}
handleCountrySubmission(e)
{
    this.setState({
        country:e.target.value

    })
}
handleFormSubmission(e)
{
    alert(`My name is ${this.state.name} and My status is ${this.state.status}. My country is ${this.state.country} 
    My Email is ${this.state.email} and my Message is ${this.state.message}`)
    e.preventDefault();
}

    render()
    {
        return(
            <div className="App">
                    <form onSubmit={this.handleFormSubmission.bind(this)}>
                        <label>
                          Name <input type="text" onChange={this.handleNameSubmission.bind(this)} value={this.state.name} />
                        </label>
                        <br/><br/>
                        <label>
                          Email <input type="email" onChange={this.handleEmailSubmission.bind(this)} value={this.state.email} />
                        </label>
                        <br/><br/>
                        <label>
                          Message <textarea onChange={this.handleMessageSubmission.bind(this)} value={this.state.message} ></textarea>
                        </label>
                        <br/><br/>
                        <label>
                         Single<input type="radio" name="status" onChange={this.handleStatusSubmission.bind(this)} value="Single" />
                        </label>
                        <label>
                         Married <input type="radio" name="status"  onChange={this.handleStatusSubmission.bind(this)} value="Married" />
                        </label>
                        <br/><br/>

                        <select value={this.state.country} onChange={this.handleCountrySubmission.bind(this)}>
                            <option value="Pakistan">Pakistan</option>
                            <option value="India">India</option>
                            <option value="Sirilanka">Sirilanka</option>

                        </select>
                        <br/><br/>
                        <input type="submit" value="Submit" />
                    </form>
            </div>

        );
    }

}
export default App;