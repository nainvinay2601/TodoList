import { useState } from "react";
export default function TodoInput(props) {
const {handleAddTodos,todoValue,setTodoValue} = props;  
 // we are sating that the function TodoInput should expect the props from the parent component and here we are destructuring the props. 

// so currently we need a variable whose value is binded to the input right here, so that when we type in something and add it using the button the stateful button which is interactive gets updates.and then we handle add todos and it gets passed to the list via this function 

// onchange function listens for changes and whenever the value of input changes it calls this function that recieves an event (e)  and we can call setTodoValue and change it with the change in value of the event via setTodoValue(e.target.value) which is the new text that gets entered into our todo. 

// so now we have to made the edit function which will let user change or edit the todo but the input value is in todoinput and todolist cant access the value so we will add it in app , same parent concept 




    return (
   <header>
    <input type="text"  value={todoValue}  onChange={(e)=>{
        setTodoValue(e.target.value);
    }}  placeholder="Enter todo..." /> 
    <button onClick={()=>{
        handleAddTodos(todoValue)
        setTodoValue("");

    }} > Add</button>
   </header>
    )
       
    

}