import React from "react";

export const Tile = ({item}) => {
  const tileDetails = Object.entries(item).map(([prop, value], index) => {
    return (
      <p key={prop} className={index === 0 ? 'tile-title' : 'tile'}>{value}</p>
    )
  })

  return (
    <div className="tile-container">
      {tileDetails}
    </div>
  );
};
