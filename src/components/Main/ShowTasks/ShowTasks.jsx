import { useState, useContext, useEffect } from "react";
import Task from "./Task";
import ViewSingleTask from "../ViewSingleTask/ViewSingleTask";
import "./showTasks.css";
import { MainContext } from "../Main";

const ShowTasks = () => {
  const [viewTask, setViewTask] = useState(false);
  const [task, setTask] = useState({});
  const { dispatch, tasks} = useContext(MainContext);
  const [displayTask, setDisplayTask] = useState([]);

  useEffect(() => {
    setDisplayTask(tasks)
  }, [tasks]);
  
  const view = (id) => {
    let foundTask = tasks.filter((task) => task.id === id);
    setTask(foundTask[0]);
    setViewTask(true);
  };

  const close = () => {
    setViewTask(false);
  };

  const searchTask = (e) => {
    let filter = tasks.filter(task => task.name.toUpperCase().includes(e.target.value.toUpperCase()))
    setDisplayTask(filter)
  }

  return (
      <div className="table-container">
        {viewTask && <ViewSingleTask task={task} close={close} />}
        <div className="header">
          <div className="search">
            <input
            type="search"
            name="search"
            id="search"
            placeholder="Search by title"
            onChange={searchTask}
          />
          </div>
          <button
            onClick={() =>
              dispatch({
                type: "SET_SHOW_FORM",
                payload: true,
              })
            }
          >
            Create Task
          </button>
        </div>
        <div className="table-container-wrapper">
          <table>
            <thead>
              <tr>
                <th>Done</th>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date-Time</th>
                <th>Reminder</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {displayTask.length > 0 &&
                displayTask.map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    dispatch={dispatch}
                    view={view}
                  />
                ))}
              {!displayTask.length && (
                <tr>
                  <td className="no-task" colSpan={8}>
                    No Task To Show
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default ShowTasks;
