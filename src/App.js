import React, { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
    }
  }

  submitTask(e, input) {
    e.preventDefault();
    console.log(input);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={(e, input) => this.submitTask(e, input)}>
          <label htmlFor="task">Task:</label>
          <input name="task" id="task"/>
          <button>Submit</button>
        </form>
        <div className='title'>My Tasks</div>
        <div className="allTasks"></div>
      </div>
    );
  }
}

export default App;
