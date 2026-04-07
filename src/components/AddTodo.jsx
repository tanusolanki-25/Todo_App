import { useState } from "react";
import { IoAdd } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNewItem = (event) => {
    event.preventDefault();
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container mt-4">
      <form
        className="row align-items-center justify-content-center shadow p-4 rounded bg-light"
        onSubmit={handleNewItem}
      >
        {/* Input Text */}
        <div className="col-md-4 mb-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your task..."
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
        </div>

        {/* Date Input */}
        <div className="col-md-3 mb-2">
          <input
            type="date"
            className="form-control form-control-lg"
            value={todoDate}
            onChange={(e) => setTodoDate(e.target.value)}
          />
        </div>

        {/* Button */}
        <div className="col-md-2 mb-2 d-grid">
          <button className="btn btn-success btn-lg">
            <IoAdd size={22} /> Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;