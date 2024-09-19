import React from 'react';

function useLocalStorage (itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
      
        let parsedItem;
    
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        console.log('Holaaaaaa');
        // console.log(localStorageItem);
        // console.log(parsedItem);
        setLoading(false);
        } catch (error) {
        setLoading(false);
        setError(true);
        }
    }, 3000);
  }, [itemName]);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  };
  
  return {
    item,
    saveItem,
    loading,
    error,
  };
}
  
export { useLocalStorage };


// localStorage.removeItem('TODOS_V1');
// const defaultTodos= [
//   { text: 'Cortar cebolla', completed:false },
//   { text: 'LALALALA', completed:true },
//   { text: 'Llorar con la llorona', completed:false },
//   { text: 'Tomar el curso de React.js', completed:false },
//   { text: 'Usar estados derivados', completed:true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
