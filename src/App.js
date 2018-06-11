import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

class App extends Component {
  state = {
    users : [
      {name: 'Darpan'}
    ]
  }
  changeNameHandler = (event) => {
      this.setState({
        users : [
          {name: event.target.value}  
        ]
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <UserInput name={this.state.users[0].name} changeName={this.changeNameHandler}/>
        <UserOutput name={this.state.users[0].name}/>
        <UserOutput/>
      </div>
    );
  }
}

export default App;
