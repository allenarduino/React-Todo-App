export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      return [...state, action.payload];
    }
    case "CHECK_TASK": {
      let taskIndex = state.findIndex(t => t.id === action.payload.id);
      state[taskIndex].isChecked = action.task.isChecked;
      return state.filter(task => task.id !== action.id);
    }
    case "REMOVE_TASK": {
      return state.filter(task => task.id !== action.id);
    }
    default:
      return state;
  }
};
