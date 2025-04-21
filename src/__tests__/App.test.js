import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App"; // ✅ Corrected path

test("displays in 'light' mode when initialized", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass("light");
});
