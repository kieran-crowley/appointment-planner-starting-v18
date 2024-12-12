import React from "react";

export const Tile = ({ name, discription }) => {
  let discriptionArray = Object.values(discription);
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {discriptionArray.map((item, i) => {
        return (
          <p className="tile" key={i}>
            {item}
          </p>
        );
      })}
    </div>
  );
};
