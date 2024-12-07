import { create } from "zustand";

export const useScrollStore = create((set) => ({
    isScroll: false,
    setScroll: (y, y2) => set((state) => ({ isScroll: y < (y2 / 2) ? false : true }))
}))