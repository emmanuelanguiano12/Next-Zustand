import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

export interface Item {
    id: number;
    name: string;
    price: number;
}

interface CartState {
    items: Item[];
    addToCart: (item: Item) => void;
    getTotalItems: () => number;
    getTotalPrices: () => number;
}

const cartState: StateCreator<CartState> = (set, get) => ({
    items: [],
    addToCart: (item: Item) => set((state) => ({
        items: [...state.items, item]
    })),
    getTotalItems: () => get().items.length,
    getTotalPrices: () => get().items.reduce((acc, b) => acc + b.price, 0),
})

export const useCartStore = create<CartState>()(
    persist(
        cartState,
        {
            name: "cart-storage",
            skipHydration: true,
        }
    )
);