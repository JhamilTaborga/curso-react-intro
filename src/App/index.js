import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

// Explicación Custom Hooks: La nomenclatura que nos pide React.js es que siempre empecemos por "use" para que sepamos qué función es una función normal y cuales son "Custom Hooks". Ejemplo: "useLocalStorage". Podemos crear nuestros propios customHooks y deben iniciar con "use".
// Para que podamos trabajar con cualquier tipo de contenido en el "localStorage" usamos "item", porque todo para localStorage es un "item".
// Cuando queremos retornar más de dos elementos de un "CustomeHook" es mucho más recomendable usar objetos en lugar de arrays, así no nos preocupamos por la posición.

function App() {
  return (
   <TodoProvider>
    <AppUI />
   </TodoProvider>
  );
}

export default App;
