import React from "react";
import Item from "./Item";
import type { ItemType } from "../types";

interface ItemListProps {
  items: ItemType[];
}

const ItemList: React.FC<ItemListProps> = ({ items = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
      {items?.map((item) => <Item key={item.id} item={item} />)}
    </div>
  );
};

export default ItemList;
