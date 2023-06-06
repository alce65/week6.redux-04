import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Task } from "../models/task";
import { ApiRepository } from "../../../core/services/api.repository";
import { consoleError } from "../../../core/services/errors";
import { AppDispatch, RootState } from "../../../core/store/store";
import * as ac from "../redux/actions.creator";
// import { useAppDispatch, useAppSelector } from "../../../core/store/hooks";

export function useTasks() {
  // const [tasks, setTasks] = useState<Task[]>([]);
  // const [tasks, dispatch] = useReducer<Task[]>(taskReducer, []);

  const { tasks } = useSelector((state: RootState) => state.tasks);
  const dispatch: AppDispatch = useDispatch();

  // const { tasks } = useAppSelector((state) => state.tasks);
  // const dispatch = useAppDispatch();

  const taskUrl = "http://localhost:3000/tasks/";

  const repo: ApiRepository<Task> = useMemo(
    () => new ApiRepository<Task>(taskUrl),
    []
  );

  const handleLoad = useCallback(async () => {
    const loadedTasks = await repo.getAll();
    dispatch(ac.loadTaskAction(loadedTasks));
  }, [repo, dispatch]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const handleAdd = async (task: Task) => {
    try {
      const newTask = await repo.create(task);
      dispatch(ac.createTaskAction(newTask));
    } catch (error) {
      consoleError(error);
    }
  };

  const handleUpdate = async (task: Task) => {
    try {
      const updatedTask = await repo.update(task.id, task);
      dispatch(ac.updateTaskAction(updatedTask));
    } catch (error) {
      consoleError(error);
    }
  };

  const handleDelete = async (task: Task) => {
    try {
      await repo.delete(task.id);
      dispatch(ac.deleteTaskAction(task.id));
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
