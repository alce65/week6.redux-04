// Reducer -> función pura
// acepta como valor un ESTADO y una ACCIÓN
// retorna un nuevo ESTADO (inmutable)

import { Task } from "../models/task";
import { createReducer } from "@reduxjs/toolkit";
import * as ac from "./actions.creator";
import { addTaskAsync, loadTasksAsync } from "./thunk";

export type TasksState = {
  tasks: Task[];
  isLoading: boolean;
  hasError: string;
};

const initialState: TasksState = {
  tasks: [],
  isLoading: false,
  hasError: "",
};

export const taskReducer = createReducer(initialState, (builder) => {
  // builder.addCase(ac.loadTaskAction, (state, { payload }) => ({
  //   ...state,
  //   tasks: payload,
  // }));

  // "tasks/load/pending"
  builder.addCase(loadTasksAsync.pending, (state) => ({
    ...state,
    isLoading: true,
  }));

  // "tasks/load/fulfilled",
  builder.addCase(loadTasksAsync.fulfilled, (state, { payload }) => ({
    ...state,
    isLoading: false,
    tasks: payload,
  }));

  // "tasks/load/rejected",
  builder.addCase(loadTasksAsync.rejected, (state) => ({
    ...state,
    hasError: "Error cargando tareas",
  }));

  // builder.addCase(ac.createTaskAction, (state, { payload }) => ({
  //   ...state,
  //   tasks: [...state.tasks, payload],
  // }));

  builder.addCase(addTaskAsync.fulfilled, (state, { payload }) => ({
    ...state,
    tasks: [...state.tasks, payload],
  }));

  builder.addCase(ac.updateTaskAction, (state, { payload }) => ({
    ...state,
    tasks: state.tasks.map((item) =>
      item.id === (payload as Task).id ? (payload as Task) : item
    ),
  }));

  builder.addCase(ac.deleteTaskAction, (state, { payload }) => ({
    ...state,
    tasks: state.tasks.filter((item) => item.id !== payload),
  }));

  builder.addDefaultCase((state) => ({ ...state }));
});
