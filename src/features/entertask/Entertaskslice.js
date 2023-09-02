import { createSlice } from "@reduxjs/toolkit";

const TaskSlide = createSlice({
  name: "AddTask",
  initialState: [],
  reducers: {
    addTask(state, action) {
      state.push({ id: Math.random(), completed: false, name: action.payload });
    },
    checkboxChange(state, action) {
      const chek = state.find((task) => task.id === action.payload);
      if (chek) {
        chek.completed = !chek.completed;
      }
    },
    deleteTask(state, action) {
      const deletetask = state.filter((task) => task.id !== action.payload);
      return deletetask;
    },
  },
});
export const { addTask, checkboxChange, deleteTask } = TaskSlide.actions;
export default TaskSlide;
