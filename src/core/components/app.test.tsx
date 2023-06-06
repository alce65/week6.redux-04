import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./app";
import { Counter } from "../../features/counter/components/counter/counter";
import ToDo from "../../features/tasks/components/todo/todo";

jest.mock("../../features/counter/components/counter/counter");
jest.mock("../../features/tasks/components/todo/todo");

test("renders learn react link", () => {
  const { getByText } = render(<App />);

  expect(getByText(/learn/i)).toBeInTheDocument();
  expect(Counter).toHaveBeenCalled();
  expect(ToDo).toHaveBeenCalled();
});
