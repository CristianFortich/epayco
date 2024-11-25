import { UseFormRegister } from "react-hook-form";

export interface ItemType {
  id?: number;
  title: string;
  body: string;
  userId: string;
}

export interface InputProps {
  register: UseFormRegister<ItemType>;
  name: keyof ItemType;
  placeholder?: string;
  required?: {
    value: boolean;
    message: string;
  };
}
