import { create } from "zustand";

const storeChooseFocus = create((set) => ({
    focus: "식당",
    setFocus: (val) => set({ focus: val }),
}));

export default storeChooseFocus;
