import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRestaurantDetail } from "../../apis/getRestaurantDetail";
import { useStore } from "zustand";
import storeDetailInfor from "../../clients/DetailInfor";
import { getRestaurantReview } from "../../apis/getRestaurantReview";
import storeDetailReview from "../../clients/DetailReview";
import storeListSelect from "../../clients/ListSelect";
import storeCategoryFocus from "../../clients/CategoryFocus";
import storeCategory from "../../clients/CategoryState";

export default function Card(prop) {
    const [isHover, setIsHover] = useState(false);
    const { setDetailInfor } = useStore(storeDetailInfor);
    const { setDetailReview } = useStore(storeDetailReview);
    const {
        restaurantList,
        cafeList,
        barList,
        addRestaurant,
        addCafe,
        addBar,
        removeRestaurant,
        removeCafe,
        removeBar,
    } = useStore(storeListSelect);
    const { focus, setFocus } = useStore(storeCategoryFocus);
    const { isSelect } = useStore(storeCategory);

    const navi = useNavigate();
    const modifiedSummary = prop.prop.summary
        .replace(/[.,!?]\s*/g, "$&\n")
        .replace(/\n\s*/g, "\n");

    const onClickDetailInfor = async () => {
        const result = await getRestaurantDetail(prop.prop.id);
        setDetailInfor(result);
        const review = await getRestaurantReview(prop.prop.id);
        console.log(review);
        setDetailReview(review);
        navi(`/main/${prop.prop.id}#infor`);
    };
    const onClickRemove = () => {
        if (focus === "식당") {
            removeRestaurant(prop.prop.name);
        } else if (focus === "카페") {
            removeCafe(prop.prop.name);
        } else if (focus === "술집") {
            removeBar(prop.prop.name);
        }
    };
    const onClickAdd = (event) => {
        event.stopPropagation();
        if (focus === "식당") {
            if (restaurantList.length < 3) {
                addRestaurant(prop.prop.name);
                if (restaurantList.length === 2) {
                    if (cafeList.length < 3 && isSelect["카페"]) {
                        setFocus("카페");
                    } else {
                        if (barList.length < 3 && isSelect["술집"]) {
                            setFocus("술집");
                        } else {
                            navi("/final");
                        }
                    }
                }
            }
        } else if (focus === "카페") {
            if (cafeList.length < 3) {
                addCafe(prop.prop.name);
                if (cafeList.length === 2) {
                    if (restaurantList.length < 3) {
                        setFocus("식당");
                    } else {
                        if (barList.length < 3 && isSelect["술집"]) {
                            setFocus("술집");
                        } else {
                            navi("/final");
                        }
                    }
                }
            }
        } else if (focus === "술집") {
            if (barList.length < 3) {
                addBar(prop.prop.name);
                if (barList.length === 2) {
                    if (restaurantList.length < 3) {
                        setFocus("식당");
                    } else {
                        if (cafeList.length < 3 && isSelect["카페"]) {
                            setFocus("카페");
                        } else {
                            navi("/final");
                        }
                    }
                }
            }
        }
    };

    const imageItem = prop.prop.rankedMenuResponseList.find(
        (item) => item.imageUrl
    );

    return (focus === "식당" && restaurantList.includes(prop.prop.name)) ||
        (focus === "카페" && cafeList.includes(prop.prop.name)) ||
        (focus === "술집" && barList.includes(prop.prop.name)) ? (
        <div
            className="relative flex flex-col justify-center w-[16.4dvw] h-[21.32dvh] rounded-2xl xl:w-[16dvw] xl:h-[21.7dvw] cursor-pointer"
            onClick={onClickRemove}
        >
            {imageItem ? (
                <img
                    src={imageItem.imageUrl}
                    alt={prop.prop.id}
                    className="object-cover object-center w-full h-[55%] rounded-t-2xl border-t-[3px] border-x-[3px] border-[#6e3bff]"
                />
            ) : (
                <div className="w-full h-[55%] rounded-t-2xl border-t-[3px] border-x-[3px] border-[#6e3bff] bg-[#E2E2E2] flex justify-center items-center">
                    <div className="font-[Pretendard-Bold] text-xl text-[#6e3bff]">
                        Palette
                    </div>
                </div>
            )}
            <div className="w-full bg-white h-[45%] rounded-b-2xl p-3 flex flex-col border-x-[3px] border-b-[3px] border-[#6e3bff]">
                <div className="flex-1 border-b-[1px] border-b-[#f3f3f3] flex flex-col">
                    <div className="flex items-center justify-between">
                        <div className="font-[Pretendard-SemiBold] text-[#323232]">
                            {prop.prop.name.length > 7
                                ? prop.prop.name.slice(0, 6)
                                : prop.prop.name}
                        </div>
                        <div className="flex gap-1">
                            {prop.prop.categoryResponseList.map((val) => (
                                <div className="text-sm" key={val.id}>
                                    #{val.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-[#c1c1c1] font-[Pretendard-SemiBold] text-sm">
                        대표 메뉴
                    </div>
                </div>
                <div className="flex flex-wrap flex-1 gap-2 py-2">
                    {prop.prop.rankedMenuResponseList
                        .sort((a, b) => a.ranking - b.ranking)
                        .slice(0, 3)
                        .map((val) => (
                            <div
                                className="text-[#606060] text-xs flex"
                                key={val.id}
                            >
                                <div className="font-[Pretendard-Bold]">・</div>{" "}
                                {val.name}
                            </div>
                        ))}
                </div>
            </div>
            <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 right-0"
            >
                <g filter="url(#filter0_d_230_6793)">
                    <circle cx="35" cy="31" r="20" fill="#6E3BFF" />
                    <circle
                        cx="35"
                        cy="31"
                        r="18.5"
                        stroke="white"
                        strokeWidth="3"
                    />
                </g>
                <path
                    d="M26 31.2256L31.5914 37L43.3333 25"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <defs>
                    <filter
                        id="filter0_d_230_6793"
                        x="0"
                        y="0"
                        width="70"
                        height="70"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="7.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_230_6793"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_230_6793"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    ) : (
        <div
            className="relative flex flex-col justify-center w-[16.4dvw] h-[21.32dvh] rounded-2xl xl:w-[16dvw] xl:h-[21.7dvw]"
            key={prop.prop.id}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={onClickDetailInfor}
        >
            {imageItem ? (
                <img
                    src={imageItem.imageUrl}
                    alt={prop.prop.id}
                    className="object-cover object-center w-full h-[55%] rounded-t-2xl "
                />
            ) : (
                <div className="w-full h-[55%] rounded-t-2xl  bg-[#E2E2E2] flex justify-center items-center">
                    <div className="font-[Pretendard-Bold] text-xl text-[#6e3bff]">
                        Palette
                    </div>
                </div>
            )}
            {/* hover summary */}
            <div
                className="absolute w-full h-[55%]  top-0 rounded-t-2xl backdrop-blur-md bg-[#606060] bg-opacity-60 border-t-[3px] border-x-[3px] flex items-center justify-center duration-500"
                style={{
                    opacity: isHover ? "1" : "0",
                    visibility: isHover ? "visible" : "hidden",
                    transition:
                        "opacity 0.5s ease, visibility 0.5s ease, border-color 0.5s ease",
                    borderColor: isHover ? "#6E3BFF" : "transparent",
                }}
            >
                <svg
                    width="60"
                    height="60"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 right-0 z-20"
                    style={{
                        opacity: isHover ? "1" : "0",
                        visibility: isHover ? "visible" : "hidden",
                        transition: "opacity 0.5s ease, visibility 0.5s ease",
                    }}
                    onClick={onClickAdd}
                >
                    <g filter="url(#filter0_d_354_1078)">
                        <circle cx="35" cy="31" r="20" fill="white" />
                        <circle
                            cx="35"
                            cy="31"
                            r="18.5"
                            stroke="#6E3BFF"
                            strokeWidth="3"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_354_1078"
                            x="0"
                            y="0"
                            width="70"
                            height="70"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="7.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_354_1078"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_354_1078"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>
                <div className="z-[2] flex flex-col items-center gap-2 size-2/3 mt-4">
                    <div className="text-[#c1c1c1] text-xs">리뷰 요약</div>
                    <div
                        className="text-sm text-white"
                        style={{
                            whiteSpace: "pre-wrap",
                        }}
                    >
                        {modifiedSummary.length >= 50
                            ? `${modifiedSummary.substring(0, 48)}...`
                            : modifiedSummary}
                    </div>
                </div>
            </div>
            <div
                className="w-full bg-white h-[45%] rounded-b-2xl p-3 flex flex-col border-x-[3px] border-b-[3px] duration-500"
                style={{
                    borderColor: isHover ? "#6E3BFF" : "transparent",
                    transition: "border-color 0.5s ease",
                }}
            >
                <div className="flex-1 border-b-[1px] border-b-[#f3f3f3] flex flex-col">
                    <div className="flex items-center justify-between">
                        <div className="font-[Pretendard-SemiBold] text-[#323232]">
                            {prop.prop.name.length > 7
                                ? prop.prop.name.slice(0, 6)
                                : prop.prop.name}
                        </div>
                        <div className="flex gap-1">
                            {prop.prop.categoryResponseList.map((val) => (
                                <div className="text-sm" key={val.id}>
                                    #{val.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-[#c1c1c1] font-[Pretendard-SemiBold] text-sm">
                        대표 메뉴
                    </div>
                </div>
                <div className="flex flex-wrap flex-1 gap-2 py-2">
                    {prop.prop.rankedMenuResponseList
                        .sort((a, b) => a.ranking - b.ranking)
                        .slice(0, 3)
                        .map((val) => (
                            <div
                                className="text-[#606060] text-xs flex"
                                key={val.id}
                            >
                                <div className="font-[Pretendard-Bold]">・</div>{" "}
                                {val.name}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
// prop.prop.reviewSummerize -> 몇 자 이상 ...
// prop.prop.restaurantKeyword -> keyword 대신 -> mood
