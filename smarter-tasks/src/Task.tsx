
import "./TaskCard.css";


interface TaskProp {
    title : string;
    desc: string;
    dueDat: string;
    uniid: string;
    delTask: (id: string) => void;
}

const Task = (props: TaskProp) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div>
          <a href={`/tasks/${props.uniid || ""}`}>
            <h2 className="text-base font-bold my-1">{props.title}</h2>
          </a>
          <p className="text-sm text-slate-500">{props.dueDat}</p>
          <p className="text-sm text-slate-500">
            Description: {props.desc}
          </p>
        </div>

        <button className="deleteTaskButton cursor-pointer flex items-center justify-center h-4 w-4 rounded-full my-5 mr-5"
          onClick={() => {props.delTask(props.uniid)}}>
          X
        </button>
      </div>
    </div>
  );
}

export default Task;