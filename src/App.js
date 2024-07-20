import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos= [
  { text: 'Cortar cebolla', completed:true },
  { text: 'Tomar el curso de Intro a React.js', completed:false },
  { text: 'Llorar con la llorona', completed:false },
  { text: 'Aprender inglés', completed:false },
];

function App() {
  return (
    <>
      <TodoCounter completed={0} total={4}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
