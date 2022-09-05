import React from "react";
import {Tile} from '../tile/Tile.js';

export const TileList = ({items}) => {
  return (
    <div>
      {items.map(item => <Tile key={Object.values(item)[0]} item={item} />)}
    </div>
  );
};
