import React from "react";
import { TaskItem } from "./types";

interface TaskFormProp {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  desc: string;
  dueDat: string;
  uniid?: string;
}

const TaskForm = (props: TaskFormProp) => {
  const [formState, setFormState] = React.useState<TaskFormState>({
    title: "",
    desc: "",
    dueDat: "",
    uniid: "",
  });

  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (formState.title.trim() === "" || formState.dueDat.trim() === "") {
      return;
    }

    const uniqueId = generateUniqueId();
    console.log("uniqueid",uniqueId) // Generate unique ID for the task
    const task: TaskItem = {
      uniid: uniqueId,
      title: formState.title,
      desc: formState.desc,
      dueDat: formState.dueDat,
    };

    props.addTask(task);
    setFormState({ title: "", desc: "", dueDat: "" });
  };

  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormState({ ...formState, title: event.target.value });
  };

  const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormState({ ...formState, desc: event.target.value });
  };

  const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormState({ ...formState, dueDat: event.target.value });
  };

  return (
    <div className="font-bold text-xl text-red-500 text-center">
      Task form
      <form onSubmit={addTask}>
        <input
          type="text"
          className="border-2 border-gray-500"
          id="todoTitle"
          required
          placeholder="Title"
          value={formState.title}
          onChange={titleChanged}
        />
        <input
          type="text"
          className="border-2 border-gray-500"
          id="todoDescription"
          required
          placeholder="Description"
          value={formState.desc}
          onChange={descriptionChanged}
        />
        <input
          type="date"
          className="border-2 border-gray-500"
          id="todoDueDate"
          required
          placeholder="Due Date"
          value={formState.dueDat}
          onChange={dueDateChanged}
        />
        <button
          type="submit"
          id="addTaskButton"
          className="bg-blue-500 hover:bg-blue-700 text-white ml-2 font-bold py-1 px-3 rounded"
        >
          Add item
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
