import "./TaskCard.css";
import { TaskItem } from "./types";

interface TaskProps {
  item: TaskItem;
  delTask: (task: TaskItem) => void;
}
const Task = (props: TaskProps) => {
  const { item, delTask } = props;
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div>
          <a href={`/tasks/${item.uniid || ""}`}>
            <h2 className="text-base font-bold my-1">{item.title}</h2>
          </a>
          <p className="text-sm text-slate-500">{item.dueDat}</p>
          <p className="text-sm text-slate-500">
            Description: {item.desc}
          </p>
        </div>

        <button className="deleteTaskButton cursor-pointer flex items-center justify-center h-4 w-4 rounded-full my-5 mr-5"
          onClick={() => delTask(item)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Task;