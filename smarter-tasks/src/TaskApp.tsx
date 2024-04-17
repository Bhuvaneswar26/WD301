import {useEffect} from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { TaskItem } from "./types";


const TaskApp = () => {

  const [tasks, setTasks] = useLocalStorage<TaskItem[]>("tasks", []);

  const addTask = (task: TaskItem) => {
    setTasks((
      state: TaskItem[]
    ) => {
      return [...state, task];
    });
  };

  const delTask = (taskId: string) => {
    setTasks((state: TaskItem[]) => {
      return state.filter((task) => task.uniid !== taskId); 
    });
  }

  useEffect(() => {
    const id =setTimeout(() => {
        console.log(`Saved ${tasks.length} tasks to the database`);
        document.title = `Tasks: ${tasks.length}`;
    },5000);

    return () => {
      console.log("clear or cancel any existing network call");
      clearTimeout(id);
    };
  }, [tasks]);

  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">
        Smarter Tasks
      </h1>
      <h1 className="text-lg mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
            Pending
          </h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} delTask={delTask} />
        </div>
      </div>
    </div>
  );
}

export default TaskApp;
