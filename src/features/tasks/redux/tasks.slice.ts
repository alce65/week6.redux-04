import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../models/task";
import { addTaskAsync, loadTasksAsync } from "./thunk";

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
  extraReducers: (builder) => {
    builder.addCase(loadTasksAsync.pending, (state) => ({
      ...state,
      isLoading: true,
    }));

    builder.addCase(loadTasksAsync.fulfilled, (state, { payload }) => ({
      ...state,
      isLoading: false,
      tasks: payload,
    }));

    builder.addCase(loadTasksAsync.rejected, (state) => ({
      ...state,
      hasError: "Error cargando tareas",
    }));

    builder.addCase(addTaskAsync.fulfilled, (state, { payload }) => ({
      ...state,
      tasks: [...state.tasks, payload],
    }));
  },
});

export const ac = sliceTasks.actions;
export default sliceTasks.reducer;
