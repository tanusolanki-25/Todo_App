import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import Welcome from "./components/Welcome";

function App() {

  const [todoItems, setTodoItems] = useState([])

  const handleOnNewItem = (itemName, itemDate) =>{
   let newTodo = [...todoItems, {
    name: itemName,
    dueDate: itemDate
   }]    
   setTodoItems(newTodo)
   }

   const handleDeleteClick = (itemName) =>{
      let newArr = todoItems.filter((item) => item.name !== itemName)
      setTodoItems(newArr)
   }

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleOnNewItem}/>
         {todoItems.length === 0 && <Welcome />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteClick}/>
      </center>
    </>
  );
}

export default App;
