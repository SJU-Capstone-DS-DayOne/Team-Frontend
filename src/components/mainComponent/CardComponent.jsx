import Card from "./Card";
import storeListSelect from "../../clients/ListSelect";
import { useStore } from "zustand";
import storeCategoryFocus from "../../clients/CategoryFocus";
import usePaginationStore from "../../clients/UsePagination";
import { useEffect } from "react";

export default function CardComponent() {
    const { restaurantArrays, cafeArrays, barArrays } =
        useStore(storeListSelect);
    const { focus } = useStore(storeCategoryFocus);
    const { currentPage, onFirstPage } = useStore(usePaginationStore);

    const getArrayByFocus = () => {
        switch (focus) {
            case "식당":
                return restaurantArrays;
            case "카페":
                return cafeArrays;
            case "술집":
                return barArrays;
            default:
                return [];
        }
    };

    const selectedArray = getArrayByFocus();

    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    const chunkedArray = chunkArray(selectedArray, 6);

    useEffect(() => {
        onFirstPage();
    }, [focus]);

    return (
        <div
            className="relative z-0 w-[300%] flex items-center h-full  transition-transform duration-1000 shrink-0 gap-4"
            style={{
                transform: `translateX(-${currentPage * 33 - 33}%)`,
            }}
        >
            {chunkedArray.map((chunk, index) => (
                <div className="flex flex-wrap w-full gap-4" key={index}>
                    {chunk.map((item) =>
                        index === currentPage - 1 ? (
                            <Card key={item.id} prop={item} />
                        ) : null
                    )}
                </div>
            ))}
        </div>
    );
}
