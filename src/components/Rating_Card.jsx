import React from "react";

const Rating_Card = ({ children, image, name }) => {
  return (
    <div className="card">
      <img src={image} alt="Hotel" />

      <div className="content">
        <div>
          {" "}
          <h1>{name}</h1>
          <span>{children}</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Veritatis deserunt, eum aspernatur enim nesciunt
          doloribus ex odio similique, Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eos eveniet perferendis autem sit, iure quos itaque
          ut sunt voluptas expedita pariatur repellat exercitationem animi
          incidunt, doloremque distinctio magnam? Laborum, quaerat. officiis
          ducimus quidem vel placeat.
        </p>
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default Rating_Card;
