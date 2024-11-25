import React from "react";
import { useItems, useAddItem } from "../../hooks";
import ItemList from "../molecules/ItemList";
import ItemForm from "../organisms/ItemForm";
import { ItemType } from "../types";

const Home: React.FC = () => {
  const { data: items, error, isLoading } = useItems();
  const mutation = useAddItem();

  const onSubmit = (data: ItemType) => {
    mutation.mutate(data);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col gap-2 items-center">
      <h1 className="mt-8 text-3xl font-extrabold italic">Add New Item</h1>
      <ItemForm onSubmit={onSubmit} />
      <span className="w-full border-t-[2px] border-gray-300" />
      <h2 className="my-4 text-3xl font-extrabold italic">Items List</h2>
      <ItemList items={items || []} />
    </div>
  );
};

export default Home;
