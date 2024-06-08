import { create } from "zustand";

const usePaginationStore = create((set) => ({
    currentPage: 1,
    totalPages: 3, // 총 페이지 수
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

export default usePaginationStore;
