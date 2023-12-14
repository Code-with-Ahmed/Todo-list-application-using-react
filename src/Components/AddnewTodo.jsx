


//Todo List Web Application using React. It is the practice Project.



// Import necessary modules from the 'react' library and the 'TodoList' component.
import React, { useState, useContext, useEffect } from 'react';
import { Todoi } from './TodoList';

// Define the 'AddnewTodo' functional component.
const AddnewTodo = () => {
  // State to manage the entire list of todos.
  const [AddTO, setAddto] =  useState([]);

  // Access the 'Todoi' context to interact with the todo-related functions.
  const { Todo, CatchNewTodo, RemoveAnyTodo, RemoveAllTodo } = useContext(Todoi);

  // State to store the text of the todo being edited.
  const [editedTodo, setEditedTodo] = useState('');

  // State to control the visibility of the edit button.
  const [toggleButton, setToggleButton] = useState(false);

  // State to store the ID of the todo being edited.
  const [editingTodoId, setEditingTodoId] = useState(null);

  // Function to initiate the editing process for a specific todo.
  const EditTodo = (id) => {
    // Find the todo with the specified ID.
    //used arrow function..
    const todoToEdit = Todo.find((todo) => { return todo.id === id });
    
    // Set the text of the todo being edited, its ID, and toggle the edit button.
    setEditedTodo(todoToEdit.text);
    setEditingTodoId(id);
    setToggleButton(true);
  }

  // Function to handle the submission of a new or edited todo.
  const CatchtheTodo2 = (e) => {
    e.preventDefault();
    if (editedTodo.trim() !== "") {
      if (!editedTodo && toggleButton) {
        // Editing an existing todo
        setEditedTodo(
          Todo.map((todo) => {
            if (todo.id === editingTodoId) {
              return { ...todo, text: editedTodo };
            }
            return todo;
          })
        );
        setEditedTodo('');
        setEditingTodoId(null);
      } else {
        // Adding a new todo
        CatchNewTodo(editedTodo);
        // it is to reset the Todo.
        setEditedTodo('');
      }
    } else {
      alert('Please enter any todo item to add in List.');
    }
  };

  // Function to delete a specific todo by its ID.
  const DeleteTodo = (id) => {
    RemoveAnyTodo(id);   //Removing any todo from the list which will take id and search for that todo.
  }

  // Function to remove all todos.
  const RemoveAll = () => {
    RemoveAllTodo();
  } // it is to remove ll todo

  // JSX code for rendering the component.
  return (
    <div>
      {/* Header */}
      <h1 className='text-center mt-40 text-md font-bold'>Add Your List Here ✌</h1>

      {/* Todo Input Section */}
      <div className='flex justify-center items-center mt-3'>
        <div className='relative'>
          {/* Todo Input Field */}
          <input type='text' onChange={(e) => { setEditedTodo(e.target.value) }} value={editedTodo} placeholder='✍ Add items...' className='w-72  py-2 text-sm pl-2' />
          {/* Button for adding or editing todos */}
          <button className="text-gray-500 absolute right-2 top-1/2 -translate-y-1/2" onClick={CatchtheTodo2}>
            {toggleButton ? (<i className="fa-solid fa-pen-to-square hover:text-green-700"></i>) : (<i className="fa-solid fa-plus"></i>)}
          </button>
        </div>
      </div>

      {/* Todo List Display Area */}
      {Todo.map((Podo, index) => {
        return (
          <div className='Main-div mt-2' key={index}>
            <div className='Child-div flex justify-center items-center' key={index}>
              {/* Display each todo with options to edit and delete */}
              <div className='flex w-72 py-1 pl-2 font-medium rounded  text-white text-sm bg-purple-700 hover:bg-white hover:text-black' key={index}>
                <p> {Podo.text} </p>
                <div className='ml-auto space-x-4'>
                  {/* Edit Button */}
                  <button onClick={() => EditTodo(Podo.id)} className='hover:text-green-700'><i className="fa-solid fa-pen-to-square"></i></button>
                  {/* Delete Button */}
                  <button onClick={() => DeleteTodo(Podo.id)} className='hover:text-red-700'><i className="fa-solid fa-trash-can"></i></button>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Remove All Button */}
      <div className='flex justify-center items-center mt-5'>
        <button className='border-2 font-medium py-[0.35rem] px-6 text-black bg-white hover:text-white hover:bg-gradient-to-r from-black via-grey-300 to-purple-400' onClick={RemoveAll}>REMOVE All</button>
      </div>
    </div>
  )
}

// Export the 'AddnewTodo' component as the default export.
export default AddnewTodo;
