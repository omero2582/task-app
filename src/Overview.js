import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className='title'>My Tasks</div>
        <ol className="allTasks">
          {this.props.tasks
                    .map((task) => <li key={task.id}>{task.text}</li>)}
        </ol>
      </div>
    );
  }
}

export default Overview;