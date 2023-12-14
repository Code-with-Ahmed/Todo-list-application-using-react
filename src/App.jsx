import React from 'react';
import TodoListProvider from './Components/TodoList';
import AddnewTodo from './Components/AddnewTodo';

const App = () => {
  return (
    <div>
    <TodoListProvider>
      <AddnewTodo />
     </TodoListProvider>
    </div>
  )
}

export default App;
