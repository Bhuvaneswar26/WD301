import React from "react";
import { TaskItem } from "./types";


interface TaskFormProps {
    addTask: (task: TaskItem) => void;
  }

interface TaskFormState {
    title : string;
    des: string;
    dueDat: string;
  }

interface TaskFormState {
}

interface TaskFormState {
    title: string;
  }



class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
          title: "",
          dueDat: new Date().toISOString().split("T")[0],
          des: "",
        }
      }

      addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTask = {
          title: this.state.title,
          des: this.state.des,
          dueDat: this.state.dueDat,
        };
        this.props.addTask(newTask);
        this.setState({ title: "" });
        this.setState({ des: "" });
        this.setState({ dueDat: new Date().toISOString().split("T")[0] });
      };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };

  desChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ des: event.target.value });
  };

  dueDatChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ dueDat: event.target.value });
  };



  inputRef = React.createRef<HTMLInputElement>();


  render(){
    return (
      <form onSubmit={this.addTask}>
        <input type="text" className="border border-slate-100 p-1" placeholder="Title"
        value={this.state.title} onChange={this.titleChanged} id="todoTitle" required/>
        <input type="text" className="border border-slate-100 p-1" placeholder="Description"
        value={this.state.des} onChange={this.desChanged} id="todoDescription" required />
        <input type="date" className="border border-slate-100 p-1" placeholder="Due Date"
        value={this.state.dueDat} onChange={this.dueDatChanged} id="todoDueDate" required />
        <button type="submit" id="addTaskButton">Add item</button>
      </form>
    )
  }

}
 export default TaskForm;