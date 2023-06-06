import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "./actions.types";
import { Task } from "../models/task";

type Keys = keyof typeof actionTypes;

export type TaskAction = {
  type: (typeof actionTypes)[Keys];
  payload: Task[] | Task | number;
};

export const loadTaskAction = createAction<Task[]>(actionTypes.load);

export const deleteTaskAction = createAction<number>(actionTypes.delete);

export const createTaskAction = createAction<Task>(actionTypes.create);

export const updateTaskAction = createAction<Task>(actionTypes.update);
