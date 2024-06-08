import { useState } from "react";
import { useStore } from "zustand";
import storeDetailInfor from "../../clients/DetailInfor";

export default function DetailImage() {
    const { detailInfor } = useStore(storeDetailInfor);

    const sortedMenu = detailInfor.menuResponseList.sort((a, b) => {
        if (a.ranking === null) return 1;
        if (b.ranking === null) return -1;
        return a.ranking - b.ranking;
    });

    const [hovering, isHovering] = useState(null);

    return (
        <div className="flex justify-center w-full gap-3 my-3">
            {sortedMenu.map(
                (val, idx) =>
                    idx <= 2 && (
                        <div
                            className="relative flex justify-center flex-1"
                            key={idx}
                        >
                            {val.imageUrl !== "" ? (
                                <img
                                    src={val.imageUrl}
                                    alt={val.id}
                                    className="object-cover object-center transition-opacity duration-700 rounded-xl size-auto aspect-square"
                                    onMouseEnter={() => isHovering(idx)}
                                    onMouseLeave={() => isHovering(null)}
                                />
                            ) : (
                                <div
                                    className="flex items-center justify-center bg-[#e2e2e2] rounded-xl size-auto aspect-square"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                    }}
                                >
                                    <div className="text-[#6e3bff] text-3xl font-[Pretendard-SemiBold]">
                                        Palette
                                    </div>
                                </div>
                            )}
                            <div
                                className="absolute text-center text-white bg-[#6E3BFF] bg-opacity-80 px-4 py-1 rounded-2xl duration-700 translate-x-[-50%] translate-y-[-50%] bottom-0 left-1/2 text-lg pointer-events-none"
                                style={{
                                    opacity: hovering === idx ? "1" : "0",
                                }}
                            >
                                {val.name}
                            </div>
                        </div>
                    )
            )}
        </div>
    );
}
