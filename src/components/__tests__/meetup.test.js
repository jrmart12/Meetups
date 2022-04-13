import { render, screen, cleanup } from "@testing-library/react";
import Signup from "../../pages/Signup";
import { BrowserRouter } from "react-router-dom";
test("should render Header component", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
});
