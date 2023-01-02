import React, { Component } from "react";

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
    console.log(this.state.input);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitTask}>
          <label htmlFor="task">Task:</label>
          <input onChange={this.inputTask} name="task" id="task"/>
          <button>Submit</button>
        </form>
        <div className="inputOut">{this.state.input}</div>
        <div className='title'>My Tasks</div>
        <div className="allTasks"></div>
      </div>
    );
  }
}

export default App;
