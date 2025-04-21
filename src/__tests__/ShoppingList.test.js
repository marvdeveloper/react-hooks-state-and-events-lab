import React from "react";
import { render } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";  // Adjust this path to point to the correct location of your ShoppingList component

const testData = ["Apples", "Bananas", "Carrots"];  // Example test data

test("displays all items when initially rendered", () => {
  const { container } = render(<ShoppingList items={testData} />);
  expect(container.querySelector(".Items").children).toHaveLength(testData.length);
});
