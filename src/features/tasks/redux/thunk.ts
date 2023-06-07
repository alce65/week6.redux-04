import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRepository } from "../../../core/services/api.repository";
import { Task } from "../models/task";
import { actionTypes } from "./actions.types";

// type payloadCreator output
// type payloadCreator input
// type prefix
// payloadCreator

export const loadTasksAsync = createAsyncThunk(
  actionTypes.load, // "tasks/load",
  async (repo: ApiRepository<Task>) => {
    return await repo.getAll();
  }
);

export const addTaskAsync = createAsyncThunk<
  Task,
  { repo: ApiRepository<Task>; task: Task }
>(
  actionTypes.create, // "tasks/create"
  async ({ repo, task }) => {
    return await repo.create(task);
  }
);
