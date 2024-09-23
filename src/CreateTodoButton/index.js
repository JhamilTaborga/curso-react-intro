import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
    return (
        <button 
            className='CreateTodoTutton'
            onClick={
                () => {
                    //Esta es otra forma para actualizar el estado. Con esta función recibimos el estado anterior y podemos actualizar el estado con esta función, en este caso tenemos en el estado inicial un booleano, si el estado inicial es "false" lo devolvemos como "true" y viceversa y así sucesivamente cada que se haga click al button.
                    setOpenModal(state => !state);
                }
            }
        > + </button>
    );
};
  
export { CreateTodoButton };