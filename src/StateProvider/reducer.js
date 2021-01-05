export const initialState = {
  tasks: [],
  // False = light , True = DARK
  theme: false,
  user: false
}
const reducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT_TASK":
      return {
        ...state,
        tasks: [...state?.tasks, action?.contents]
      }
    case "DELETE_TASK":
      const index = state.tasks.findIndex(
        (element) => element.id === action.id
      );
      let newTasks = [...state.tasks];
      if (index >= 0) {
        newTasks.splice(index, 1);
      }
      return {
        ...state,
        tasks: newTasks
      }
    case "SET_FINISHED":
      const i = state.tasks.findIndex((element) => element.id === action.id);
      let n = [...state.tasks];
      n[i].action = !n[i]?.action
      return {
        ...state,
        tasks: state?.tasks.map((elements, i) => i === i - 1 ? { ...elements, action: !state?.tasks[i].action } : elements)
      }
    case "DELETE_ALL":
      const t = state.theme
      return {
        theme: t,
        tasks: []
      }
    case "SET_DARK":
      return {
        ...state,
        theme: true
      }
    case "SET_LIGHT":
      return {
        ...state,
        theme: false
      }
    default:
      console.log("add tasks");
      break;
  }
}

export default reducer;