import React from 'react';

import "./TaskCard.css";


interface TaskProp {
    title: string;
    des: string;
    dueDat: string;
}


class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h3 className="text-base font-bold my-1">
          {this.props.title} ({this.props.dueDat})
        </h3>
        {this.props.des}
      </div>
    );
  }
}


export default Task;