import React from "react";
import type { ItemType } from "../types";

interface ItemProps {
  item: ItemType;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="flex flex-col gap-2 bg-orange-100 hover:bg-orange-200 rounded-md shadow-xl p-2">
      <h3 className="text-xl font-bold text-center">{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};

export default Item;
