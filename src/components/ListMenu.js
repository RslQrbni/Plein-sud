import React, { useState } from "react";
import Dish from "./Dish";
import Dessert from "./Dessert";

function ListMenu() {
  const [active, setActive] = useState("Dish");

  return (
    <div>
      <button onClick={() => setActive("Dish")}>Plats</button>
      <button onClick={() => setActive("Dessert")}>Desserts</button>
      {active === "Dish" && <Dish title="dish" />}
      {active === "Dessert" && <Dessert title="dessert" />}
    </div>
  );
}

export default ListMenu;
