import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4 p-4 bg-light rounded">
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;