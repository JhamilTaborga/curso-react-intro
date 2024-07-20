import './TodoList.css';

function TodoList(props) {
    return (
      <ul className='container'>
        {props.children}
      </ul>
    );
}

export { TodoList };
