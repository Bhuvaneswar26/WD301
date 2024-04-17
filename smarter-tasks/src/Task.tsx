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
      <h3 className="text-base font-bold my-1">{props.title} ({props.dueDat}) <button className="deleteTaskButton bg-red-500 m-2 rounded-md p-2 hover:bg-red-600" 
      onClick={() => props.delTask(props.uniid)}>
        Delete Task
      </button>
      </h3>
        {props.desc}
      <br />
      <br />
      
    </div>
  );
}

export default Task;