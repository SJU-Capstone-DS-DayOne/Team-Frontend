import { create } from "zustand";

const storeReviewPagination = create((set) => ({
    currentPage: 1,
    totalPage: 4, // 총 페이지 수
    nextPage: () =>
        set((state) => ({
            currentPage: state.currentPage + 1,
        })),
    prevPage: () =>
        set((state) => ({
            currentPage: state.currentPage - 1,
        })),
    onFirstPage: () => set({ currentPage: 1 }),
}));

export default storeReviewPagination;
