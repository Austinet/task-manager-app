export const defaultValues = { 
  taskDB: [],
  setShowForm: false,
  setEditForm: false,
  editTask: {},
  setViewTask: false,
  viewTask: {},
  isModalSet: false,
  modalMessage: "",
};

const reducer = (state, action) => {
  try {
    if (action.type === "ADD_TASK") {
        return {
          ...state,
          taskDB: [...state.taskDB, action.payload],
          setShowForm: false,
          isModalSet: true,
          modalMessage: "Task Added"
        }    
      } else if (action.type === "DELETE_TASK") {
        return {
          ...state,
          taskDB: state.taskDB.filter(task => task.id !== action.payload),
          isModalSet: true,
          modalMessage: "Task Deleted"
        } 
      }  else if (action.type === "VIEW_TASK") {
        return {
          ...state,
          setViewTask: action.payload.open,
          viewTask: state.taskDB.filter(task => task.id === action.payload.id)[0],
        } 
      } else if (action.type === "UPDATE_TASK") {
        let updateDb = state.taskDB.filter(task => task.id !== action.payload.task.id)
        return {
          ...state,
          taskDB:[...updateDb, action.payload.task], 
          setEditForm: false,
          isModalSet: true,
          modalMessage: "Task Updated"
        } 
      }else if (action.type === "SET_REMINDER") {
        let taskDB = state.taskDB.map(task => {
            if (task.id === action.payload) {
              return {...task, reminder: !task.reminder}
            } else {
              return task
            }
          })
          return {
            ...state,
            taskDB,
            isModalSet: true,
            modalMessage: "Reminder Edited"
          }
      } else if (action.type === "SET_STATUS") {
        let taskDB = state.taskDB.map(task => {
            if (task.id === action.payload) {
              return {...task, status: "done"}
            } else {
              return task
            }
          })
          return {
            ...state,
            taskDB,
            isModalSet: true,
            modalMessage: "Task Completed"
          }
      } else if (action.type === "REMOVE_MODAL") {
        return {
          ...state,
          isModalSet: false
        }
      } else if (action.type === "SET_SHOW_FORM") {
        return {
          ...state,
          setShowForm: action.payload
        }
      } else if (action.type === "SET_EDIT_FORM") {
        return {
          ...state,
          editTask: state.taskDB.filter(task => task.id === action.payload.id)[0],
          setEditForm: action.payload.open,
        }
      } else {
          throw new Error("Invalid Action Type")
      }
  } catch (error) {
    console.log("ERROR: ", error)
  }
}

export default reducer