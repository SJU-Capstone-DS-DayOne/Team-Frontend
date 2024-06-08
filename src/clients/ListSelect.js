import { create } from "zustand";

const storeListSelect = create((set) => ({
    restaurantArray: [
        {
            id: 123,
            name: "정면",
            img: "../../imgs/jungmunImg.jpeg",
            address: "서울 광진구 능동로13길 88",

            lat: 37.54544800904861,
            lng: 127.06868704785585,
            menus: ["홍면", "백면", "정면"],
            restaurantKeyword: ["한식", "국수"],
            summary: "국수 존맛",
        },
        {
            id: 223,
            img: "../../imgs/foodImg2.jpg",
            lat: 37.54158576690729,
            lng: 127.07115305528146,
            name: "오포케",
            menus: ["다이어트", "깔끔한", "셀프바"],
            restaurantKeyword: ["다이어트", "깔끔한"],
            summary:
                "건강하게 맛있는 맛! 건대 포케맛집입니다.12345765123123213123123",
        },
        {
            id: 323,
            img: "../../imgs/foodImg3.jpg",
            lat: 37.54638192334075,
            lng: 127.07017029591364,
            name: "은하동",
            menus: ["은하동", "스테이크동", "랍스타"],
            restaurantKeyword: ["일식", "덮밥"],
            summary:
                "랍스타 가성비 덥밥집, 분위기랑 비쥬얼 최고 랍스타 가성비 덥밥집,1231231231231232131221",
        },
        {
            id: 423,
            img: "../../imgs/foodImg3.jpg",
            lat: 37.545406136183054,
            lng: 127.0709331988262,
            name: "은하동1",
            menus: ["은하동", "스테이크동", "랍스타"],
            restaurantKeyword: ["일식", "덮밥"],
            summary: "랍스타 가성비 덥밥집, 분위기랑 비쥬얼 최고",
        },
        {
            id: 523,
            img: "../../imgs/foodImg2.jpg",
            lat: 37.54506451125195,
            lng: 127.06966550957969,
            name: "오포케1",
            menus: ["클래식 오포케", "스페셜 감태 오포케", "오포케"],
            restaurantKeyword: ["다이어트", "깔끔한"],
            summary:
                "건강하게 맛있는 맛! 건대 포케맛집입니다.건대 포케맛집입니다.건대 포케맛집입니다.",
        },
        {
            id: 623,
            img: "../../imgs/jungmunImg.jpeg",
            lat: 37.544660923639164,
            lng: 127.07115305528666,
            name: "정면1",
            menus: ["홍면", "백면", "정면"],
            restaurantKeyword: ["오픈주방", "분위기"],
            summary: "국수 존맛",
        },
    ],
    restaurantArrays: [],
    cafeArrays: [],
    barArrays: [],
    restaurantList: [],
    cafeList: [],
    barList: [],
    setRestaurantArrays: (newArrays) => set({ restaurantArrays: newArrays }),
    setCafeArrays: (newArrays) => set({ cafeArrays: newArrays }),
    setBarArrays: (newArrays) => set({ barArrays: newArrays }),
    addRestaurant: (newRestaurant) =>
        set((state) => ({
            restaurantList: [...state.restaurantList, newRestaurant],
        })),
    addCafe: (newCafe) =>
        set((state) => ({
            cafeList: [...state.cafeList, newCafe],
        })),
    addBar: (newBar) =>
        set((state) => ({
            barList: [...state.barList, newBar],
        })),
    removeRestaurant: (restaurantToRemove) =>
        set((state) => ({
            restaurantList: state.restaurantList.filter(
                (restaurant) => restaurant !== restaurantToRemove
            ),
        })),
    removeCafe: (cafeToRemove) =>
        set((state) => ({
            cafeList: state.cafeList.filter((cafe) => cafe !== cafeToRemove),
        })),
    removeBar: (barToRemove) =>
        set((state) => ({
            barList: state.barList.filter((bar) => bar !== barToRemove),
        })),
    onClear: () =>
        set({
            restaurantList: [],
            cafeList: [],
            barList: [],
        }),
}));

export default storeListSelect;
