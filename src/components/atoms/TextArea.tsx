import React from "react";
import { InputProps } from "../types";

const TextArea: React.FC<InputProps> = ({
  register,
  name,
  placeholder,
  required,
}) => {
  return (
    <textarea
      {...register(name)}
      placeholder={placeholder}
      required={required?.value}
      className="border border-gray-300 rounded-md p-2 hover:border-gray-500"
    />
  );
};

export default TextArea;
