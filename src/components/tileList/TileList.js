import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ Array }) => {
  return (
    <div>
      {Array.map(({ name, ...rest }, i) => {
        return <Tile name={name} discription={rest} key={i}></Tile>;
      })}
    </div>
  );
};