import { create } from "zustand";

const storeCategory = create((set) => ({
    isSelect: { 식당: true, 카페: false, 술집: false },
    onClear: () =>
        set({
            isSelect: { 식당: true, 카페: false, 술집: false },
        }),
    onChange: (value) =>
        set((state) => ({
            isSelect: {
                ...state.isSelect, // isSelect 전부 호출
                [value]: state.isSelect[value] === false ? true : false,
            },
        })),
}));

export default storeCategory;
