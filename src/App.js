import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos= [
  { text: 'Cortar cebolla', completed:false },
  { text: 'LALALALA', completed:true },
  { text: 'Llorar con la llorona', completed:false },
  { text: 'Tomar el curso de React.js', completed:false },
  { text: 'Usar estados derivados', completed:true },

];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
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
    const todosIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todosIndex].completed = true;
    setTodos(newTodos);
  };
  
  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {serchedTodos.map(todo => (
          <TodoItem
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
