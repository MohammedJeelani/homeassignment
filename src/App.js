import React, {useState, useEffect} from 'react'
import './App.css';

// importing components......

import Form from './Components/Form';
import TodoList from './Components/TodoList';



function App() {
  // State Hooks
  const [inputText , setInputText] = useState("");
  const [descriptionText, setDescriptionText]= useState("");
  const [date , setDate] = useState("");
  const [todos , setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  // Effect hook

  useEffect(() => {
    filterHandler();
  },[todos, status])


  // Functions

  const filterHandler = () =>{
     switch(status) {
       case "completed":
         setFilterTodos(todos.filter(todo => todo.completed === true));
         break;

         case "Incompleted":
           setFilterTodos(todos.filter(todo => todo.completed === false));
           break;

           default :
           setFilterTodos(todos);
           break;
     }
       }
    return (
    <div className="App">
      <header><h1>To-Do App </h1> </header>
      <Form inputText={inputText} todos={todos} status={status} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} descriptionText={descriptionText} setDescriptionText={setDescriptionText} date={date} setDate={setDate}/>
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;