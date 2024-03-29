import './TaskCard.css';

interface TCProps {
  title: string;
  dueDate: string;
  completedAtDate: string; 
  assigneeName: string;
}


const TaskCard = (props:TCProps) =>{

    if(props.dueDate){
        return (
            <div className='TaskItem'>
              <h2 className='text-xl font-bold text-red-500'>{props.title}</h2>
               <p>Due on: {props.dueDate}</p>
              <p>Assignee: {props.assigneeName}</p>
            </div>
          )
    }else{
        return (
            <div className='TaskItem'>
              <h2 className='text-xl font-bold text-red-500'>{props.title}</h2>
                  <p>Completed on: {props.completedAtDate}</p>
              <p>Assignee: {props.assigneeName}</p>
            </div>
          )
    }
  }

export default TaskCard;