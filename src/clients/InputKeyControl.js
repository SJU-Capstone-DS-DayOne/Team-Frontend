import { create } from "zustand";

const storeInputKey = create((set) => ({
    key: 0,
    inputValue: "",
    onInput: (event) => {
        set((state) => ({
            inputValue: (state.inputValue += event.target.value),
        }));
        set((state) => ({ key: state.key + 1 }));
    },
    onDelete: () => {
        set((state) => ({
            inputValue: state.inputValue.slice(0, state.key - 1),
        }));
        set((state) => ({ key: state.key - 1 }));
    },
    onReset: () => {
        set({ key: 0, inputValue: "" });
    },
    // onRemove: () => {
    //     set({ inputValue: "" });
    //     set({ key: 0 });
    // }, 추후 inputvalue값을 아에 없애고 싶을 때 기능구현하기.
}));

export default storeInputKey;
