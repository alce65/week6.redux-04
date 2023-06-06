import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { store } from "../store/store";
import App from "./app";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
