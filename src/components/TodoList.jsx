// import React from 'react'

import TodoCard from "./TodoCard";

//  this component shows how our todo list will look like 

function TodoList(props) {   

    const {todos} = props; 

    // we can pass the handleDEeltetodo but we need that in todoCard so for that we have can use the spread operator ... on props and pass it down to multiple component which is todocard in this case 

    // so in react communication happens between the component, and if u have component at the same level and they want to access this todo, it should be present in parent no in the component of same level because if todocard want to access this list it wont happen because todolist and todocard are children of parent component app.jsx and if they both want to access same thing it should be present in parent component so we will comment out this list here and we will put this list in parent component.

    // let todos = [
    //     "go to the gym",
    //     "dusting",
    //     "go for driving class"
    // ]
  return (
<ul className="main">
    { 
 // so what is happening here is we are making an array called todos and passing that array in unordered list with map method for mapping each single item from the array and giving each todo in a list with a unique key which is todoIndex because index of each item in array is always unique and parent must have a key while we use the map and render.


// 2. Now we had a list before about how each card will look but to make it simple we made component of how the card will look and we imported a child component called todoCard and passed the key here because now the parent is todocard here and todocard.jsx is child of todoList.jsx

        todos.map ((todo, todoIndex)=>{
            return (
             <TodoCard {...props}  key={todoIndex} index ={todoIndex} > 
            <p>{todo}</p>
             </TodoCard>
            );
        })
    }
</ul>
  )
}

export default TodoList