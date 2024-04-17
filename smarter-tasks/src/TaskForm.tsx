import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title : string;
  desc: string;
  dueDat: string;
  uniid: string;
}

 const TaskFormFC = (props: TaskFormProps) => {
  const [formState, setFormState] = React.useState<TaskFormState>({
    title: "",
    desc: "",
    dueDat: "",
    uniid: "",
  });

  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, title: event.target.value });
  }

  const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, desc: event.target.value });
  }

  const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    const newId = new Date().toISOString();
    console.log(`newId: ${newId}`);
    setFormState({ ...formState, dueDat: event.target.value, uniid: newId});
  }
  
  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with`);
    if (formState.title.length === 0 || formState.dueDat.length === 0) {
      return;
    }
    props.addTask(formState);
    setFormState({ title: "", desc: "", dueDat: "", uniid: ""});
  };

  return (
    <div className='font-bold text-xl text-red-500 text-center'>
      Task form
      <form onSubmit={addTask}>
        <input type="text" className = "border-2 border-gray-500" id="todoTitle" required
        placeholder="Title" value={formState.title} onChange={titleChanged}
        />
        <input type="text" className = "border-2 border-gray-500" id="todoDescription" required
        placeholder="Description" value={formState.desc} onChange={descriptionChanged}
        />
        <input type="date" className = "border-2 border-gray-500" id="todoDueDate" required
        placeholder="Due Date" value={formState.dueDat} onChange={dueDateChanged}
        />
        <button type="submit" id="addTaskButton"
        className="bg-blue-500 hover:bg-blue-700 text-white ml-2 font-bold py-1 px-3 rounded">
          Add item
        </button>
      </form>
    </div>
  );
 };

 export default TaskFormFC;
 