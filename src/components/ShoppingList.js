import React from "react";

const ShoppingList = ({ items }) => {
  return (
    <div className="ShoppingList">
      <ul className="Items">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;  // Default export
