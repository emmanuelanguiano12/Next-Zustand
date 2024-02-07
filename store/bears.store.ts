import { create } from "zustand";

interface BearStore {
    bears: number
    increasePopulation: () => void,
    removeAllBears: () => void,
}

export const useBearsStore = create<BearStore>()((set) => ({ //libreria de Zustand
    bears: 0,
    increasePopulation: () => set((state) => ({bears: state.bears + 1})),
    removeAllBears: () => set({bears : 0}),
}));