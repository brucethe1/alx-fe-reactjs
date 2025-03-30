import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders TodoList component", () => {
    render(<TodoList />);
    const heading = screen.getByText(/todo list/i);
    expect(heading).toBeInTheDocument();
});
