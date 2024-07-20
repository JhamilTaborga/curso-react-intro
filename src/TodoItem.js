import './TodoItem.css';

function TodoItem(props) {
    return (
      <li className='todo-item'>
        <button className='button-check' ></button>
        <p className='TodoItem-p TodoItem-p--complete'>
          {props.text}
        </p>
        <button className='button-delete'></button>
      </li>
    );
};

export { TodoItem };