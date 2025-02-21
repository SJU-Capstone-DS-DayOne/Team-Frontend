import Card from "./Card";
import storeListSelect from "../../clients/ListSelect";
import { useStore } from "zustand";
import storeCategoryFocus from "../../clients/CategoryFocus";
import usePaginationStore from "../../clients/UsePagination";
import { useEffect, useRef, useState } from "react";

export default function CardComponent() {
    const [chunkedArray, setChunkedArray] = useState([]);
    const [array, setArray] = useState([]);
    const [parentWidth, setParentWidth] = useState(0);
    const { restaurantArrays, cafeArrays, barArrays } =
        useStore(storeListSelect);
    const { focus } = useStore(storeCategoryFocus);
    const { currentPage, onFirstPage } = useStore(usePaginationStore);
    const parentRef = useRef(null);

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

    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };
    useEffect(() => {
        if (parentRef.current) {
            setParentWidth(parentRef.current.offsetWidth); // width 값 설정
        }
    }, []);

    useEffect(() => {
        onFirstPage();
        const selectedArray = getArrayByFocus();

        setChunkedArray(chunkArray(selectedArray, 6));
    }, [focus]);

    useEffect(() => {
        setArray(chunkedArray[currentPage - 1] || []);
    }, [currentPage, chunkedArray]);

    return (
        <div
            className="relative z-0 flex flex-wrap items-center w-full h-full gap-4 mt-2"
            ref={parentRef}
        >
            {array.map((val) => (
                <Card key={val.id} prop={val} width={parentWidth} />
            ))}
        </div>
    );
}
