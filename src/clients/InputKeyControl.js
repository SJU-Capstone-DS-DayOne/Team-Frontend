import { create } from "zustand";

const storeInputKey = create((set) => ({
    key: 0,
    inputValue: "",
    onInput: (event) => {
        set((state) => ({
            inputValue: state.inputValue + event.target.value,
            key: state.key + 1,
        }));
    },
    onDelete: () => {
        set((state) => ({
            inputValue: state.inputValue.slice(0, state.key - 1),
            key: state.key - 1,
        }));
    },
    onReset: () => {
        set({ key: 0, inputValue: "" });
    },
}));

export default storeInputKey;
