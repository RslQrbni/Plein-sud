import React from "react";

function Dessert({ title }) {
  return (
    <>
      <div className="desserts__image">
        <img src="" alt="plats" />
      </div>
      <div className="desserts__titles">
        <h3>{title} ------------- 15.90€</h3>
        <p>
          Quis laboris nulla officia laborum irure nostrud quis tempor ex ad
          mollit cupidatat.
        </p>
      </div>
    </>
  );
}

export default Dessert;
