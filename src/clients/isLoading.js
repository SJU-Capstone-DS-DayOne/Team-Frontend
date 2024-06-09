import { create } from "zustand";

const storeLoading = create((set) => ({
    loading: false,
    setLoading: () => set((state) => ({ loading: !state.loading })),
}));

export default storeLoading;
