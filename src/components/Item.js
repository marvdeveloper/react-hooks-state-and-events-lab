import React, { useState } from "react";

function Item({ name, category }) {
  // Create state to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Event handler to toggle the item in the cart
  const toggleCart = () => {
    setInCart(prevState => !prevState);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
