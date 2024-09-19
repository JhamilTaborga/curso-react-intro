import React from 'react';
import { useLocalStorage } from './useLocalStorage';

//React.context: Usamos este "context" para no caer en el "Prop drill". Con context podemos establecer una comunicación directa entre un componente en un nivel muy alto (componenete padre) y uno en un nivel muy bajo (componente hijo).
const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        // Renombrar elementos: Podemos renombrar elementos con la sintaxis ":", con los dos puntos podemos renombrar elementos.
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    
      const completedTodos = todos.filter(
        todos => !!todos.completed
    ).length;
    const totalTodos = todos.length;
    
    const serchedTodos = todos.filter(
        (todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    });
    
    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };
    
    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            serchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
