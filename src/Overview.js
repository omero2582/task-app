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
        <div className="allTasks">
          {this.props.tasks.map((task, i) => <div key={crypto.randomUUID()}>{`${i+1}. ${task}`}</div>)}
        </div>
      </div>
    );
  }
}

export default Overview;