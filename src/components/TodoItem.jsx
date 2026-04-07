import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./TodoItem.module.css";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container mt-3">
      <div
        className={`row align-items-center ${styles.todoItem} shadow rounded p-3`}
      >
        {/* Task */}
        <div className="col-md-5 fw-semibold fs-5">
          {todoName}
        </div>

        {/* Date */}
        <div className="col-md-4 text-muted fs-6">
          📅 {todoDate}
        </div>

        {/* Delete */}
        <div className="col-md-3 d-flex justify-content-end">
          <button
            type="button"
            className={`btn ${styles.deleteBtn}`}
            onClick={() => onDeleteClick(todoName)}
          >
            <RiDeleteBin6Line size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;