import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
      <h1 className='todo-counter'>
        Has completado <span>{completed}</span> tareas de <span>{total}</span>
      </h1>
    );
}

export { TodoCounter };
