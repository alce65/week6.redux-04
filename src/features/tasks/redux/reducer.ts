// Reducer -> función pura
// acepta como valor un ESTADO y una ACCIÓN
// retorna un nuevo ESTADO (inmutable)

import { actionTypes } from "./actions.types";
import { Task } from "../models/task";
import { TaskAction } from "./actions.creator";
import { createReducer } from "@reduxjs/toolkit";
import * as ac from "./actions.creator";

export type TasksState = {
  tasks: Task[];
};

const initialState: TasksState = {
  tasks: [],
};

export const taskReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadTaskAction, (state, { payload }) => ({
    ...state,
    tasks: payload,
  }));

  builder.addCase(ac.createTaskAction, (state, { payload }) => ({
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
