import PropTypes from "prop-types";

const Task = ({ task, dispatch,  }) => {
  const { id, status, name, description, dateTime, reminder } = task;
  const setStatus = (e) => {
    dispatch({ type: "SET_STATUS", payload: id })
    e.currentTarget.disabled = true
  }

  return (
    <tr className={status === "done" ? "line-through" : ""}>
      <td>
         <input type="checkbox" onClick={(e)=> setStatus(e)} disabled={false} />
      </td>
      <td>{name.length > 25 ? `${name.slice(0, 25)}...` : name}</td>
      <td>
        {description.length > 25
          ? `${description.slice(0, 25)}...`
          : description}
      </td>
      <td>{`Date: ${dateTime.slice(0, 10)} Time: ${dateTime.slice(11)}`}</td>
      <td>
        <button onClick={() => dispatch({ type: "SET_REMINDER", payload: id })}>
          {reminder ? (
            <i className="fas fa-bell"></i>
          ) : (
            <i className="fas fa-bell-slash"></i>
          )}
        </button>
      </td>
      <td>
        <button className="view-btn" title="View task" onClick={() => dispatch({ type: "VIEW_TASK", payload: {id, open: true} })}>
          <i className="fas fa-eye"></i>
        </button>
      </td>
      <td>
        <button className="edit-btn" title="Edit task" onClick={() => dispatch({ type: "SET_EDIT_FORM", payload: {id, open: true} })}>
          <i className="fas fa-pen"></i>
        </button>
      </td>
      <td>
        <button
          className="delete-btn"
          title="Delete task"
          onClick={() => dispatch({ type: "DELETE_TASK", payload: id })}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  dispatch: PropTypes.func,
  view: PropTypes.func,
};

export default Task;
