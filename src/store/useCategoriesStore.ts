import { type Category } from "../types";
import { create } from "zustand";

type CategoriesState = {
    categories: Category[];
    fetchCategories: () => Promise<void>;
}

export const useCategoriesStore = create<CategoriesState>((set) => ({
    categories: [],
    fetchCategories: async () => {
        const response = await fetch("https://68e3c74e8e14f4523daea3ad.mockapi.io/animals");
        const data = await response.json();
        set({categories: data});
    },
}));