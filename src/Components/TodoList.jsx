import React,{ useState,createContext,useEffect } from 'react';

export const Todoi = createContext();
const TodoListProvider = ({children}) => {
  const [Todo, setTodo]= useState([
    {text:"Hello", id:1},
    {text:"Hey, How are you!", id:2}
  ]);


  useEffect(() => {
    const storedData = localStorage.getItem("mineTodoList");
    if (storedData) {
      setTodo(JSON.parse(storedData));
    }
  }, []);

  // Save data to local storage whenever Todo changes
  useEffect(() => {
    localStorage.setItem("mineTodoList", JSON.stringify(Todo));
  }, [Todo]);




  const CatchNewTodo = (Newdo) => {
    setTodo([
      ...Todo,
      {text:Newdo,id:Math.random()}
    ])
  } 
 
 const RemoveAnyTodo = (id) => {
  setTodo(Todo.filter((Todo) => {
    return Todo.id !== id
  }))
 }

 const RemoveAllTodo = () => {
  setTodo([]);
 }


  return (
    <div>
      <Todoi.Provider value={{Todo,CatchNewTodo,RemoveAnyTodo,RemoveAllTodo}}>
        {children}
        </Todoi.Provider>
    </div>
  )
}  
export default TodoListProvider;
