import { useReducer, createContext } from "react";
import AddTask from "./AddTask/AddTask";
import ShowTasks from "./ShowTasks/ShowTasks";
import Alert from "./Alert/Alert";
import reducer, { defaultValues } from "../../utils/data.js";
import EditTask from "./EditTask/EditTask";
import ViewSingleTask from "./ViewSingleTask/ViewSingleTask";

export const MainContext = createContext();

const Main = () => {
  const [state, dispatch] = useReducer(reducer, defaultValues);

  return (
    <main>
      <MainContext.Provider
        value={{
          dispatch,
          tasks: [...state.taskDB],
          message: state.modalMessage,
          editTask: state.editTask,
          viewTask: state.viewTask,
          setViewTask: state.setViewTask
        }}
      >
        {state.setViewTask && <ViewSingleTask />}

         {state.setEditForm && (
          <EditTask />
        )}
        {state.isModalSet && (
          <Alert />
        )}
        {state.setShowForm && <AddTask />}
        <ShowTasks />
      </MainContext.Provider>
    </main>
  );
};

export default Main;
