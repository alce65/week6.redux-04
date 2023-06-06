import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../models/task";

export type TasksState = {
  tasks: Task[];
};

const initialState: TasksState = {
  tasks: [],
};

const sliceTasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    load: (state, { payload }) => ({
      ...state,
      tasks: payload,
    }),
    delete: (state, { payload }) => ({
      ...state,
      tasks: state.tasks.filter((item) => item.id !== payload),
    }),
    create: (state, { payload }) => ({
      ...state,
      tasks: [...state.tasks, payload],
    }),
    update: (state, { payload }) => ({
      ...state,
      tasks: state.tasks.map((item) =>
        item.id === (payload as Task).id ? (payload as Task) : item
      ),
    }),
  },
});

export const ac = sliceTasks.actions;
export default sliceTasks.reducer;
