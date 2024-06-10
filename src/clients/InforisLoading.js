import { create } from "zustand";

const storeInforLoading = create((set) => ({
    loading: false,
    setLoading: () => set((state) => ({ loading: !state.loading })),
}));

export default storeInforLoading;
