import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className="container mt-3">
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={() => onDeleteClick(item.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoItems;