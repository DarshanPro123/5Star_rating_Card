import React from "react";

const Rating_Card = ({ children }) => {
  return (
    <div className="card">
      <img
        src={
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="Hotel"
      />

      <div className="content">
        <div>
          {" "}
          <h1>Mergistre</h1>
          <span>{children}</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Veritatis deserunt, eum aspernatur enim nesciunt
          doloribus ex odio similique, officiis ducimus quidem vel placeat.
        </p>
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default Rating_Card;
