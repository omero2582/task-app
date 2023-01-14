import React, { Component } from "react";
import Overview from "./Overview";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newTask: {
        text: '',
        id: crypto.randomUUID(),
      },
      tasks: []
    };
  }

  inputTask = (e) => {
    this.setState((state) => ({
      newTask: {
        text: e.target.value,
        id: state.newTask.id,
      }
    })); 
  };

  submitTask = (e) => {
    e.preventDefault();
    this.setState((state) => ({
        tasks: [...state.tasks, state.newTask],
        newTask: {
          text: '',
          id: crypto.randomUUID(),
        },
    }));
  };

  deleteTask = (id) => {
    console.log(`deleteTask ${id}`);
    this.setState((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id), 
    }));
  };

  render() {
    let { newTask, tasks } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.submitTask}>
          <label>Task:
            <input onChange={this.inputTask} value={newTask.text}/>
          </label>
          <button>Submit</button>
        </form>
        <div className="inputOut">{newTask.text}</div>
        <Overview tasks={tasks} onDelete={this.deleteTask}/>
      </div>
    );
  }
}

export default App;
// TODO
// read react document 7. Conditional Rendering and 8. List and Keys
// then attempt last section of Odin Project easy #2 - removing items and hard #1 