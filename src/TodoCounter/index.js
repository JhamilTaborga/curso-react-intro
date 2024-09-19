import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  if (totalTodos === 0) {
    return ( 
      <h1 className='TodoCounter'>
        Aún no tienes TODOS Agregados
      </h1>
    );
  } else if (totalTodos === completedTodos) {
    return (
      <>
        <h1 className='TodoCounter'>
        Has completado <span>{completedTodos}</span> tareas de <span>{totalTodos}</span>
        </h1>
        <h2 className='TodoCounterCongratulate'>
          Felicidades, has terminado todos los TODOS!🥳
        </h2>
      </>
    );
  } else {
    return (
      <h1 className='TodoCounter'>
        Has completado <span>{completedTodos}</span> tareas de <span>{totalTodos}</span>
      </h1>
    );
  } 
}

export { TodoCounter };
