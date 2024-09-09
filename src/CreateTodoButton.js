import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
        <button 
            className='CreateTodoTutton'
            onClick={
                (event) => {
                    console.log('le diste click');
                    console.log(event);
                    console.log(event.target)
                }
            }
        > + </button>
    );
};
  
export { CreateTodoButton };