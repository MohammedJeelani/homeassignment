import React from 'react';
import {  PrimaryButton } from '@fluentui/react/lib/Button';
import { TextField } from '@fluentui/react/lib/TextField';

const Form = ({inputText, todos,status, setInputText, setTodos, setStatus,setDescriptionText, descriptionText,date, setDate}) => {
    // JavaScript fucntions and Handlers
     const inputTextHandler = (e) =>{
         setInputText(e.target.value)
        
     }
     const descriptionTextHandler = (e) =>{
        setDescriptionText(e.target.value)
       
    }
    const dateHandler = (e) =>{
        setDate(e.target.value)
       
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);

    }
   
         
      const submitTodoHandler = (e) => {
          e.preventDefault(); 
          setTodos([
              ...todos, {text: inputText, completed: false , id: Math.random() * 10}
          ])
          setInputText("");
          setDescriptionText("");
          alert(`Title :${inputText} , Description : ${descriptionText}, Due Date : ${date}, Status : ${status}` )
      }   

      
     
    return (
        <form className='main'>

        <label className="input-label">To-Do Title</label>
        <TextField onChange={inputTextHandler} placeholder="Enter Title here" value={inputText} type="text" className="todo-input"ariaLabel="Required without visible label" required />
        <label className="input-label">To-Do Description</label>
        <TextField  onChange={descriptionTextHandler} placeholder="Enter Description here" value={descriptionText} type="text" className="todo-description"  multiline rows={3} ariaLabel="Required without visible label" required/>
      
        <label className="input-label">Due Date</label> <br></br>
        <input onChange={dateHandler} type="date" className="todo-date" ></input> <br></br>
    
            
        

        <div className="select">
            <label className="input-label">To-Do Status</label> <br></br>
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">ToDo</option>
                <option value="completed">Done</option>
                <option value="Incompleted">Stalled</option>

            </select> <br></br>

            <PrimaryButton text="Submit" onClick={submitTodoHandler} type="submit" className="todo-button" />

        </div> 
        </form>
        
    );

}
export default Form