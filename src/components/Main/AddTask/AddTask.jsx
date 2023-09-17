import { useState, useContext } from "react";
import { MainContext } from "../Main";
// import "./addTask.css";
import "../../../assets/css/form.css";

const resetTask = {
  name: "",
  description: "",
  dateTime: "",
  status: "",
  reminder: false,
};

export const AddTask = () => {
  const [task, setTask] = useState(resetTask);
  const { dispatch } = useContext(MainContext);

  //Add task
  const addTask = (e) => {
    e.preventDefault();
    if (!task.name.trim()) {
      alert("Enter task name");
    } else if (!task.description.trim()) {
      alert("Enter the task description");
    } else {
      dispatch({
        type: "ADD_TASK",
        payload: { ...task, id: new Date().getTime().toString() },
      });
      
      setTask(resetTask);
      // dispatch({ type: "SET_SHOW_FORM", payload: false});
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Create New Task</h2>
          <button onClick={() =>  dispatch({type: "SET_SHOW_FORM", payload: false})}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <form onSubmit={addTask}>
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
            Save Task <i className="fas fa-save"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
