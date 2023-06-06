import { useCallback, useEffect, useMemo, useState } from "react";
import { Task } from "../models/task";
import { ApiRepository } from "../../../core/services/api.repository";
import { consoleError } from "../../../core/services/errors";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const taskUrl = "http://localhost:3000/tasks/";

  const repo: ApiRepository<Task> = useMemo(
    () => new ApiRepository<Task>(taskUrl),
    []
  );

  const handleLoad = useCallback(async () => {
    const loadedTasks = await repo.getAll();
    setTasks(loadedTasks);
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const handleAdd = async (task: Task) => {
    try {
      const newTask = await repo.create(task);
      setTasks([...tasks, newTask]);
    } catch (error) {
      consoleError(error);
    }
  };

  const handleUpdate = async (task: Task) => {
    try {
      const updatedTask = await repo.update(task.id, task);
      setTasks(tasks.map((item) => (item.id === task.id ? updatedTask : item)));
    } catch (error) {
      consoleError(error);
    }
  };

  const handleDelete = async (task: Task) => {
    try {
      await repo.delete(task.id);
      setTasks(tasks.filter((item) => item.id !== task.id));
    } catch (error) {
      consoleError(error);
    }
  };

  return {
    tasks,
    handleAdd,
    handleUpdate,
    handleDelete,
  };
}
