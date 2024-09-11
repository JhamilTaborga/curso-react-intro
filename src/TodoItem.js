import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'
import './TodoItem.css';

function TodoItem(props) {
    return (
      <li className='TodoItem'>
        <CompleteIcon />
        {/* <button className='Button Button-check' onClick={props.onComplete}> </button> */}
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
        </p>
        {/* <button className='Button Button-delete' onClick={props.onDelete}> </button> */}
        <DeleteIcon />
      </li>
    );
};

export { TodoItem };