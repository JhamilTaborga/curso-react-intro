import './TodoItem.css';

function TodoItem(props) {
    return (
      <li className='TodoItem'>
        <button className='Button Button-check' ></button>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
        </p>
        <button className='Button Button-delete'></button>
      </li>
    );
};

export { TodoItem };