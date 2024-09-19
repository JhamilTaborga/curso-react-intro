import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';

function AppUI () {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
  
      {/* Todos los ".Consumer" siguen un patron de render llamadas las Rendrer Props, así como nosotros podemos crear componentes a los que podemos pedirle que llame a sus "props.children" internamente este componente de "React.Consumer" también llama a su props.children pero lo hace de una forma distinta, lo hace utilizando las "render functions", esto significa que no espera que le enviemos un compente así tal cual, lo que espera es una función (function). Por esto hacemos lo siguiente:*/}
      <TodoContext.Consumer>
        {({
          loading,
          error,
          serchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
          <TodoList>
          {loading && (
            <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            </>
          )}
          {error && <TodosError />}
          {(!loading && serchedTodos.length == 0) && <EmptyTodos />}

          {serchedTodos.map(todo => (
            <TodoItem
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        )}
      </TodoContext.Consumer>
        
      <CreateTodoButton />
    </>
  );
}

export { AppUI };
