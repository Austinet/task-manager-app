import { useState, useContext } from "react";
import { MainContext } from "../Main";
import "../../../assets/css/form.css";
// import "./editTask.css";
const resetTask = {
  name: "",
  description: "",
  dateTime: "",
  status: "",
  reminder: false,
};

export const EditTask = () => {
  const { dispatch, editTask } = useContext(MainContext);
  const [task, setTask] = useState(editTask);

  //Add task
  const updateTask = (e) => {
    e.preventDefault();
    if (!task.name.trim()) {
      alert("Enter task name");
    } else if (!task.description.trim()) {
      alert("Enter the task description");
    } else {
        console.log(task)
      dispatch({
        type: "UPDATE_TASK",
        payload: {task},
      });
      setTask(resetTask);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Create New Task</h2>
          <button onClick={() => dispatch({ type: "SET_EDIT_FORM", payload: {open: false} })}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <form onSubmit={updateTask}>
          <div className="form-control">
            <label htmlFor="task">Title</label>
            <input
              type="text"
              id="name"
              className="input-box"
              placeholder="Enter task title"
              value={task.name}
              onChange={(e) => setTask({ ...task, name: e.target.value })}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="day-time">Due Day & Time</label>
            <input
              type="datetime-local"
              id="dateTime"
              className="input-box"
              placeholder="Add Day & Time"
              value={task.dateTime}
              onChange={(e) => setTask({ ...task, dateTime: e.target.value })}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              placeholder="Enter task description"
              required
              value={task.description}
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="form-control-checkbox">
            <label htmlFor="reminder">Set Reminder</label>
            <input
              type="checkbox"
              id="reminder"
              checked={task.reminder}
              onChange={(e) =>
                setTask({ ...task, reminder: e.currentTarget.checked })
              }
            />
          </div>
          <button type="submit" className="modal-button">
            Update Task <i className="fas fa-pen"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
