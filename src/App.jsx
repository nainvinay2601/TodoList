import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([
    // "go to the gym",
    // "dusting",
    // "go for driving class",
  ]);

const [todoValue, setTodoValue] = useState(""); 

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  // 4. Now for todoInput we will use stateful variable which is used when a varible is supposed to be change when user interaction is done like in this case input is form and as user add the input the variable should change and add the new item.

  // 5. defining state  --- const [ variable, function to update the variable] = ("initial value");

  // now we have passed default value [] which is an empty array , but for now lets add items from todos and delete that variable because these two cant have same name at the same time.s 


  // 6. now we have a stateful variable and now our objective is to change the todos using the setTodos function in todoInput but we can do it we can handle event like this 


  function handleAddTodos(newTodo){

    const  newTodoList = [...todos, newTodo ]   // so what we did here is we declared the new todo list and spread out the old todos  ( for each event which will be addition of the item in the todos using the todoinput) and updated it with the newtodo and the new array which is newtodolist will be replaced with items of todos using setTodos. 

    persistData(newTodoList);

    setTodos(newTodoList);

  } 




  // by using state hook we repaint the dom each time the value is changed.

  //7. now that we have created this function which will accept and change the list we can pass it like attribute props to todoinput
  

    function handleDeleteTodo(index) {
      const newTodoList = todos.filter((todo, todoIndex)=>{
        return todoIndex  !== index; 
      })
    persistData(newTodoList);

      setTodos(newTodoList);
    } 


    function handleEditTodo(index){
      const valueToBeEdited = todos[index]
      setTodoValue(valueToBeEdited)
      handleDeleteTodo(index)
    }
    // 8. all we are doing is passing the index of item that we are removing and filtering out using condition that if index passed is not equal to the todoIndex then it can stay. like if i want to remove item with the todoIndex of 1 so filter method will loop throw the todos and compare the index ( 1 ) with every todoIndex and check the condition which is !== if  index (1) is not equal to the todoIndex( lets say 0) then it will be included otherwise exclude it from the new array which is in our case is newTodoList which will be passed to setTodo function.  Now we take the function and pass it to the component where our delete button is present. ( todoList)  as a props

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    console.log(localTodos);
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);


//  useEffect(() => {
//    persistData(todos);
//  }, [todos]);


  return (
    // now we can say the todoinput can accesss the list and todolist as well and todocard as well all via using props but a different form of props not just a children

    // 2. now we passed todos array in the form of attribute which is actually a prop now that can be used to access the todos by todolist

    // 3. now todos can recieve the properties using props in the function and defining const {todos} =props; and destructering will be done and now those todos will be accessed by the todocard using props again and destructuring using children sow tree now is -- app -- todolist--todocard

    <>
      <TodoInput todoValue={todoValue}  setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList  handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos} />
    </>
  );
}

export default App
