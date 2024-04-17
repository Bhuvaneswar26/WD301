import Task from "./Task";
import { TaskItem } from "./types";
interface Props {
  tasks: TaskItem[];
  deleteTask: (id: string) => void;
}


const TaskListFC = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <li>
      <Task key={idx} title={task.title} dueDat={task.dueDat} desc={task.desc} uniid={task.uniid} delTask={props.delTask} />
    </li>
  ));
  return (
    <>
      <ul>{list}</ul>
    </>
  );
}

export default TaskListFC;
