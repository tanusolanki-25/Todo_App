function AddTodo() {
  return (
    <>
      <div className="container">
          <div className="row kg-row">
            <div className="col-3">
              <input type="text" placeholder="Enter Your Text" />
            </div>
            <div className="col-3">
              <input type="date" />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-success kg-button">Add</button>
            </div>
          </div>
        </div>
    </>
  );
}

export default AddTodo;