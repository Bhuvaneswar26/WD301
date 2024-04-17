import Task from "./Task";
import { TaskItem } from "./types";
interface Prop {
  tasks: TaskItem[];
  delTask: (id: string) => void;
}


const TaskList = (props: Prop) => {
  const list = props.tasks.map((task, idx) => (
    <li>
      <Task key={idx} title={task.title} dueDat={task.dueDat} desc={task.desc} uniid={task.uniid} delTask={(task) => props.delTask(task)} />
    </li>
  ));
  return (
    <>
      <ul>{list}</ul>
    </>
  );
}

export default TaskList;
