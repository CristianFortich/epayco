// src/components/organisms/ItemForm.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import { ItemType } from "../types";

interface ItemFormProps {
  onSubmit: (data: ItemType) => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<ItemType>();

  const handleFormSubmit: SubmitHandler<ItemType> = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      className="w-1/2 mx-auto my-8 flex flex-col gap-2"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Input
        register={register}
        name="title"
        placeholder="Title"
        required={{ value: true, message: "Title is required" }}
      />
      <TextArea
        register={register}
        name="body"
        placeholder="Body"
        required={{ value: true, message: "Body is required" }}
      />
      <button
        type="submit"
        className="w-fit mx-auto py-2 px-4 rounded-md bg-blue-700 text-gray-200 hover:bg-blue-700/70"
      >
        Add Item
      </button>
    </form>
  );
};

export default ItemForm;
