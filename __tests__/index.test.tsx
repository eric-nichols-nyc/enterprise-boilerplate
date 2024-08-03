import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Home from "@/app/page";

test("Home page", () => {
  const {container} = render(<Home />);
  expect(container).toBeInTheDocument();
});