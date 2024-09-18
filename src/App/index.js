import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// localStorage.removeItem('TODOS_V1');
// const defaultTodos= [
//   { text: 'Cortar cebolla', completed:false },
//   { text: 'LALALALA', completed:true },
//   { text: 'Llorar con la llorona', completed:false },
//   { text: 'Tomar el curso de React.js', completed:false },
//   { text: 'Usar estados derivados', completed:true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));


// Explicación Custom Hooks: La nomenclatura que nos pide React.js es que siempre empecemos por "use" para que sepamos qué función es una función normal y cuales son "Custom Hooks". Ejemplo: "useLocalStorage". Podemos crear nuestros propios customHooks y deben iniciar con "use".
// Para que podamos trabajar con cualquier tipo de contenido en el "localStorage" usamos "item", porque todo para localStorage es un "item".

function App() {
  // Cuando queremos retornar más de dos elementos de un "CustomeHook" es mucho más recomendable usar objetos en lugar de arrays, así no nos preocupamos por la posición.
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
   <AppUI 
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      serchedTodos={serchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
   />
  );
}

export default App;
