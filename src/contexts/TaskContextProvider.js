import React from "react";
import { taskReducer } from "../reducers/TaskReducer";
export const TaskContext = React.createContext();

const TaskContextProvider = props => {
  const [tasks, dispatch] = React.useReducer(taskReducer, []);
  const sortedTasks = tasks.sort((t, f) =>
    f.isChecked === t.isChecked ? 0 : f.isChecked ? -1 : 1
  );
  return (
    <TaskContext.Provider value={{ tasks, sortedTasks, dispatch }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
