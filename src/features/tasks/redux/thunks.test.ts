import { store } from "../../../core/store/store";
import { addTaskAsync, loadTasksAsync } from "./thunk";
import { ApiRepository } from "../../../core/services/api.repository";
import { Task } from "../models/task";

describe("Given ...", () => {
  test("should first", () => {
    const mockTask: Task = {} as Task;

    const mockRepo: ApiRepository<Task> = {
      getAll: jest.fn(),
      create: jest.fn(),
    } as unknown as ApiRepository<Task>;

    store.dispatch(loadTasksAsync(mockRepo));
    expect(mockRepo.getAll).toHaveBeenCalled();

    store.dispatch(
      addTaskAsync({
        repo: mockRepo,
        task: mockTask,
      })
    );
  });
});
