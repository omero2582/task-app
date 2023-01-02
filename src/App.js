import React, { Component } from "react";
import Overview from "./Overview";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      input: '',
    }
  }

  inputTask = (e) => {
    this.setState({
      input: e.target.value,
    }); 
  }

  submitTask = (e) => {
    e.preventDefault();
    this.setState((state, props) => {
      return {
        tasks: [...state.tasks, state.input]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitTask}>
          <label>Task:
            <input onChange={this.inputTask} value={this.state.value}/>
          </label>
          <button>Submit</button>
        </form>
        <div className="inputOut">{this.state.input}</div>
        <Overview tasks = {this.state.tasks}/>
      </div>
    );
  }
}

export default App;
