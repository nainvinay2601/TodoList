// import React from 'react' 

// 1. Now to recieve the children we use the concept of props 

function TodoCard(props) {

    const {children, handleDeleteTodo, index, handleEditTodo} = props; 
      // destructuring so that we can render out each children from the props 
  return (
    <li className="todoItem">
      {/* now the destructuring is done, now to render each children we do something like this, {children} which is <p> {todo> </p> in parent component todolist.jsx
       */}
      {children}
      <div className="actionContainer">
        <button onClick={()=>{
          handleEditTodo(index);
        }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={()=>{
handleDeleteTodo(index);
        }} >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

// now we do need index for handleDeleteTodo and this is present at the parent level which we passed at start in todolist and now we can pass that index like props
export default TodoCard