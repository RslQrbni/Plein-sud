import React from "react";
// import axios from "axios";
// const client = axios.create({
//   baseURL: "https://reqres.in/api/users",
// });
function Plats({ title }) {
  return (
    <div>
      <div className="dish__image">
        <img src="" alt="plats" />
      </div>
      <div className="dish__titles">
        <h3>{title} -------------- 15.90€</h3>
        <p>
          Quis laboris nulla officia laborum irure nostrud quis tempor ex ad
          mollit cupidatat.
        </p>
      </div>
    </div>
  );
}

export default Plats;
