import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { ItemType } from "../components/types";

const fetchItems = async (): Promise<ItemType[]> => {
  const localItems = localStorage.getItem("items");
  if (localItems) {
    return JSON.parse(localItems);
  } else {
    const response: AxiosResponse<ItemType[]> = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    return response.data;
  }
};

const addItem = async (newItem: ItemType): Promise<ItemType> => {
  const items = JSON.parse(localStorage.getItem("items") || "[]");
  items.push(newItem);
  localStorage.setItem("items", JSON.stringify(items));
  return newItem;
};

// Custom hook to use items
export const useItems = () => {
  return useQuery<ItemType[], Error>({
    queryKey: ["items"],
    queryFn: fetchItems,
    staleTime: 1000 * 60 * 5,
  });
};

// Custom hook to add an item
export const useAddItem = () => {
  const queryClient = useQueryClient();
  return useMutation<ItemType, Error, ItemType>({ mutationFn: addItem, 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
  });
};
