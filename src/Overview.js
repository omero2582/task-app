import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }
  // TODO.. find how to move big map bunctions below, and extract it to the
  // class here on top.... so far I cant get React to render it properly
  // when I try to move it here on top.. probably a problem of me
  // not knowing how classes work.. have to re-read some stuff

  // Think what i did below works.... First i moved the map code to a const
  // declaration inside of render() but outside of its return.
  // and then I extracted this map into its own function getAllTasks()
  // I think this is prob close to how it should be done... The thing is,
  // I fant put the function directly inside JSX bc JSX doesnt accept
  // functions as elements
  getAllTasks = () => (
    this.props.tasks.map((task) => 
    <li key={task.id}>{task.text}
      <button onClick={() => this.props.onDelete(task.id)}>Delete</button>
      <button onClick={() => this.props.onEdit(task.id)}>Edit</button>
    </li>)
    // havent worked on Edit button... think I will leave this for later
    // so i can get started on next lesson :thumbs-up:
  );

  render() {
    const allTasks = this.getAllTasks();

    return (
      <div>
        <div className='title'>My Tasks</div>
        <ol className="allTasks">
          {allTasks}
        </ol>
      </div>
    );
  }
}

export default Overview;