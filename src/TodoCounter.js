import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  if (total == 0) {
    return ( 
      <h1 className='TodoCounter'>
        Aún no tienes TODOS Agregados
      </h1>
    );
  } else if (total == completed) {
    return (
      <>
        <h1 className='TodoCounter'>
        Has completado <span>{completed}</span> tareas de <span>{total}</span>
        </h1>
        <h2 className='TodoCounterCongratulate'>
          Felicidades, has terminado todos los TODOS!🥳
        </h2>
      </>
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
