import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo.js'

class App extends Component {
  state = {
    todo: [
      {
        id: 1,
        title: "wash cloths",
        completed: false
      },
      {
        id: 2,
        title: "wash cloths",
        completed: false
      },
      {
        id: 3,
        title: "wash cloths",
        completed: false
      }
    ]
  }
  render(){
    return (
      <div className="App">
        <Todo todo={this.state.todo}/> 
      </div>
    );
  }
}

export default App;
