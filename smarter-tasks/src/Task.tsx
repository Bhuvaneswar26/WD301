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
    <div className="TaskItem border border-red-200">
      <h3 className="text-base font-bold my-2">{props.title} ({props.dueDat}) <button className="deleteTaskButton bg-red-500 m-2 rounded-md p-2 hover:bg-red-600" 
      onClick={() => props.delTask(props.uniid)}>
        Delete Task
      </button>
      </h3>
        {props.desc}
      <hr />
      
    </div>
  );
}

export default Task;