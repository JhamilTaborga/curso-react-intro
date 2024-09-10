import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    if ( total == completed) {
      return (
        <h1 className='TodoCounter'>
          Felicidades, has terminado todos los TODOS!🥳
        </h1>
      );
    } else {
      return (
        <h1 className='TodoCounter'>
          Has completado <span>{completed}</span> tareas de <span>{total}</span>
        </h1>
      );
    } 
  
}

export { TodoCounter };
