import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ToDo from "./todo";
// import { useTasks } from "../../hooks/use.tasks";
import { Task } from "../../models/task";
import { Provider } from "react-redux";
import { store } from "../../../../core/store/store";
import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "../../redux/reducer";

// jest.mock("../../hooks/use.tasks");
jest.mock("../add.task/add.task");
jest.mock("../card.task/card.task");

const mockTask = new Task("Test", "Pepe");
mockTask.id = 1;

describe("Given ToDo Component", () => {
  describe("When it is instantiated", () => {
    // (useTasks as jest.Mock).mockReturnValue({
    //   tasks: [mockTask],
    //   handleAdd: jest.fn(),
    //   handleDelete: jest.fn(),
    //   handleUpdate: jest.fn(),
    // });

    const mockStore = configureStore({
      reducer: {
        tasks: taskReducer,
      },
      preloadedState: {
        tasks: {
          tasks: [],
        },
      },
    });

    render(
      <Provider store={mockStore}>
        <ToDo></ToDo>
      </Provider>
    );
    const element = screen.getByRole("heading");
    test("Then it should be in the component", () => {
      expect(element).toBeInTheDocument();
    });
  });
});
