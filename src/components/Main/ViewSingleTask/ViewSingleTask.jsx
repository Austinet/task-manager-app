import { useContext } from "react";
import { MainContext } from "../Main";
import "../../../assets/css/modal.css"

const ViewSingleTask = () => {
  const { dispatch, viewTask} = useContext(MainContext);
  const { name, dateTime, description, reminder } = viewTask;

  const checkDay = (dateTime) => {
    const day = new Date (dateTime).getDay()

    switch(day) {
      case 0: return "Sunday"
      case 1: return "Monday"
      case 2: return "Tueday"
      case 3: return "Wednesday"
      case 4: return "Thurday"
      case 5: return "Friday"
      case 6: return "Saturday"
      default: return -1
    }
  }
  
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Task Details</h2>
          <button onClick={() => dispatch({ type: "VIEW_TASK", payload: { open: false}})}>
             <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="task-item">
          <h3>Title</h3>
          <p>{name}</p>
        </div>
        <div className="task-item">
          <h3>Due Day & Time</h3>
          <p>{`Date: ${checkDay(dateTime)}, ${dateTime.slice(0, 10)} Time: ${dateTime.slice(11)}`}</p>
        </div>
        <div className="task-item">
          <h3>Description</h3>
          <p>{description}</p>
        </div>
        <div className="task-item">
          <h3>Set Reminder</h3>
          <p>{reminder ? <i className="fas fa-bell"></i> : <i className="fas fa-bell-slash"></i>}</p>
        </div>
        <button className="modal-button" onClick={() => dispatch({ type: "VIEW_TASK", payload: { open: false}})}>Close</button>
      </div>
    </div>
  );
};

export default ViewSingleTask;
