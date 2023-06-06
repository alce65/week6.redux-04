import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ToDo from "./todo";
import { useTasks } from "../../hooks/use.tasks";
import { Task } from "../../models/task";

jest.mock("../../hooks/use.tasks");
jest.mock("../add.task/add.task");
jest.mock("../add.task/add.task2");
jest.mock("../card.task/card.task");

const mockTask = new Task("Test", "Pepe");
mockTask.id = 1;

describe("Given ToDo Component", () => {
  describe("When it is instantiated", () => {
    (useTasks as jest.Mock).mockReturnValue({
      tasks: [mockTask],
      handleAdd: jest.fn(),
      handleDelete: jest.fn(),
      handleUpdate: jest.fn(),
    });
    render(<ToDo></ToDo>);
    const element = screen.getByRole("heading");
    test("Then it should be in the component", () => {
      expect(element).toBeInTheDocument();
    });
  });
});
