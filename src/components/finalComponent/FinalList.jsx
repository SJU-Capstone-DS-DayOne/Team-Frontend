import { useStore } from "zustand";
import storeListSelect from "../../clients/ListSelect";
import storeCategory from "../../clients/CategoryState";
import storeChooseFocus from "../../clients/ChooseFocus";
import storeFinalSelect from "../../clients/FinalSelect";
import { postDateCourse } from "../../apis/postDateCourse";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function FinalList() {
    const {
        restaurantList,
        cafeList,
        barList,
        restaurantArrays,
        cafeArrays,
        barArrays,
    } = useStore(storeListSelect);

    const { isSelect } = useStore(storeCategory);
    const { focus, setFocus } = useStore(storeChooseFocus);
    const {
        finalRestaurant,
        finalCafe,
        finalBar,
        setFinalRestaurant,
        setFinalCafe,
        setFinalBar,
        onFinalClear,
    } = useStore(storeFinalSelect);
    const navi = useNavigate();

    const onFinalPage = async () => {
        const rstRestaurantId = restaurantArrays.find(
            (item) => item.name === finalRestaurant
        )?.id;
        const cafeRestaurantId = cafeArrays.find(
            (item) => item.name === finalCafe
        )?.id;
        const barRestaurantId = barArrays.find(
            (item) => item.name === finalBar
        )?.id;
        console.log(barRestaurantId);

        const result = await postDateCourse(
            rstRestaurantId,
            cafeRestaurantId,
            barRestaurantId
        );
        if (result) {
            navi("/datecourse");
        }
    };
    useEffect(() => {
        onFinalClear();
    }, []);

    return (
        <div className="relative z-20 flex flex-col w-[28%] h-full py-6 ">
            <div className="text-[#6e3bff] font-[Pretendard-SemiBold]">
                최종적으로 원하는 가게를 골라주세요!
            </div>
            {Object.keys(isSelect).map((val, idx) =>
                isSelect[val] ? (
                    val === "식당" ? (
                        <div
                            key={idx}
                            className="flex flex-col gap-4 cursor-pointer"
                            onClick={() => setFocus(val)}
                        >
                            <div className="flex items-center gap-1.5 pt-6 ">
                                <svg
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_275_9583)">
                                        <path
                                            d="M19.1537 11.2153L18.2837 6.69367C18.0454 5.277 17.1287 3.89867 15.8287 3.28533C15.1471 2.96367 14.3637 3.45867 14.3604 4.212L14.2754 20.3637C14.2737 20.7953 14.4504 21.2103 14.7654 21.5053L14.8054 21.5437C15.4037 22.1037 16.3337 22.1037 16.9304 21.5437C17.2687 21.2253 17.4487 20.7737 17.4187 20.3087L17.0471 14.597C17.0204 14.1903 17.2804 13.8187 17.6721 13.7037C18.7421 13.3903 19.3904 12.3037 19.1537 11.212V11.2153Z"
                                            fill={
                                                focus === val
                                                    ? "#606060"
                                                    : "#c1c1c1"
                                            }
                                        />
                                        <path
                                            d="M11.3387 3.16699C10.9337 3.16699 10.6053 3.49533 10.6053 3.90033V8.11199C10.6053 8.52199 10.2737 8.85366 9.86366 8.85366C9.45366 8.85366 9.12199 8.52199 9.12199 8.11199V3.90033C9.12199 3.49533 8.79366 3.16699 8.38866 3.16699H8.36866C7.96366 3.16699 7.63533 3.49533 7.63533 3.90033V8.11199C7.63533 8.52199 7.30366 8.85366 6.89366 8.85366C6.48366 8.85366 6.15199 8.52199 6.15199 8.11199V3.90033C6.15199 3.49533 5.82366 3.16699 5.41866 3.16699H5.39866C4.99533 3.16699 4.66699 3.49533 4.66699 3.90033V9.40866C4.66699 11.0303 5.43199 12.557 6.73199 13.527L6.85866 13.622C7.09533 13.7987 7.22533 14.082 7.20699 14.377L6.82366 20.262C6.79533 20.7003 6.92866 21.142 7.22533 21.4653C7.84366 22.137 8.89699 22.137 9.51533 21.4653C9.81199 21.142 9.94533 20.7003 9.91699 20.262L9.53366 14.377C9.51366 14.082 9.64533 13.7987 9.88199 13.622L10.0087 13.527C11.3087 12.557 12.0737 11.0303 12.0737 9.40866V3.90033C12.0737 3.49533 11.7453 3.16699 11.3403 3.16699H11.3387Z"
                                            fill={
                                                focus === val
                                                    ? "#606060"
                                                    : "#c1c1c1"
                                            }
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_275_9583">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                                transform="translate(0 0.5)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div
                                    className="font-[Pretendard-Bold] text-xl"
                                    style={{
                                        color:
                                            focus === val
                                                ? "#606060"
                                                : "#c1c1c1",
                                    }}
                                >
                                    {val}
                                </div>
                            </div>
                            {/* 식당 리스트 */}
                            <div className="flex flex-col gap-2">
                                {focus === val ? (
                                    restaurantList.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col gap-2 w-full p-3 border-2 border-[#6e3bff] rounded-2xl cursor-poiner"
                                            style={{
                                                backgroundColor:
                                                    finalRestaurant === item
                                                        ? "#6e3bff"
                                                        : "#ffffff",
                                            }}
                                            onClick={() =>
                                                setFinalRestaurant(item)
                                            }
                                        >
                                            <div
                                                className="font-[Pretendard-SemiBold] text-lg"
                                                style={{
                                                    color:
                                                        finalRestaurant === item
                                                            ? "#ffffff"
                                                            : "#323232",
                                                }}
                                            >
                                                {item}
                                            </div>
                                            <div className="flex gap-1">
                                                {restaurantArrays
                                                    .find(
                                                        (items) =>
                                                            items.name === item
                                                    )
                                                    .rankedMenuResponseList.map(
                                                        (value, index) => (
                                                            <div
                                                                className="text-xs"
                                                                key={value.id}
                                                                style={{
                                                                    color:
                                                                        finalRestaurant ===
                                                                        item
                                                                            ? "#c1c1c1"
                                                                            : "#606060",
                                                                }}
                                                            >
                                                                {index === 0
                                                                    ? `${value.name}`
                                                                    : `・${value.name}`}
                                                            </div>
                                                        )
                                                    )}
                                            </div>
                                        </div>
                                    ))
                                ) : finalRestaurant ? (
                                    <div className="flex flex-col  w-full p-3 border-2 border-[#6e3bff] bg-[#6e3bff] rounded-2xl gap-1">
                                        <div className="text-white font-[#Pretendard-SemiBold] text-lg">
                                            {finalRestaurant}
                                        </div>
                                        <div className="flex gap-1">
                                            {restaurantArrays
                                                .find(
                                                    (items) =>
                                                        items.name ===
                                                        finalRestaurant
                                                )
                                                .rankedMenuResponseList.map(
                                                    (value, index) => (
                                                        <div
                                                            className="text-xs text-[#c1c1c1]"
                                                            key={value.id}
                                                        >
                                                            {index === 0
                                                                ? `${value.name}`
                                                                : `・${value.name}`}
                                                        </div>
                                                    )
                                                )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex text-center w-full p-3 border-[1px] border-[#c1c1c1] rounded-2xl gap-1">
                                        {restaurantList.map((item, index) => (
                                            <div
                                                className="text-[#c1c1c1] text-lg font-[Pretendard-SemiBold]"
                                                key={index}
                                            >
                                                {index === 0
                                                    ? `${item}`
                                                    : `・${item}`}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : val === "카페" ? (
                        <div
                            key={idx}
                            className="flex flex-col gap-4 cursor-pointer"
                            onClick={() => setFocus(val)}
                        >
                            <div className="flex items-center gap-1.5 pt-6 ">
                                <svg
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.5917 18.8301H4.98C4.57667 18.8301 4.25 19.1567 4.25 19.5601C4.25 19.9634 4.57667 20.2901 4.98 20.2901H17.5933C17.9967 20.2901 18.3233 19.9634 18.3233 19.5601C18.3233 19.1567 17.9967 18.8301 17.5933 18.8301H17.5917Z"
                                        fill={
                                            focus === val
                                                ? "#606060"
                                                : "#c1c1c1"
                                        }
                                    />
                                    <path
                                        d="M18.067 5.99134H17.4287L17.437 5.67634C17.4487 5.21467 17.0787 4.83301 16.6154 4.83301H5.62369C5.16036 4.83301 4.79036 5.21467 4.80203 5.67634L4.95536 11.508C5.04369 14.8497 7.77703 17.513 11.1204 17.513C14.2187 17.513 16.792 15.2247 17.222 12.2297H18.0687C19.792 12.2297 21.1887 10.833 21.1887 9.10967C21.1887 7.38634 19.792 5.98967 18.0687 5.98967L18.067 5.99134ZM18.067 10.7197H17.3037L17.3887 7.50301H18.067C18.9537 7.50301 19.6754 8.22467 19.6754 9.11134C19.6754 9.99801 18.9537 10.7197 18.067 10.7197Z"
                                        fill={
                                            focus === val
                                                ? "#606060"
                                                : "#c1c1c1"
                                        }
                                    />
                                </svg>
                                <div
                                    className="font-[Pretendard-Bold] text-xl"
                                    style={{
                                        color:
                                            focus === val
                                                ? "#606060"
                                                : "#c1c1c1",
                                    }}
                                >
                                    {val}
                                </div>
                            </div>
                            {/* 카페 리스트 */}
                            <div className="flex flex-col gap-2">
                                {focus === val ? (
                                    cafeList.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col gap-2 w-full p-3 border-2 border-[#6e3bff] rounded-2xl cursor-pointer"
                                            style={{
                                                backgroundColor:
                                                    finalCafe === item
                                                        ? "#6e3bff"
                                                        : "#ffffff",
                                            }}
                                            onClick={() => setFinalCafe(item)}
                                        >
                                            <div
                                                className="font-[Pretendard-SemiBold] text-lg"
                                                style={{
                                                    color:
                                                        finalCafe === item
                                                            ? "#ffffff"
                                                            : "#323232",
                                                }}
                                            >
                                                {item}
                                            </div>
                                            <div className="flex gap-1">
                                                {cafeArrays
                                                    .find(
                                                        (items) =>
                                                            items.name === item
                                                    )
                                                    .rankedMenuResponseList.map(
                                                        (value, index) => (
                                                            <div
                                                                className="text-xs"
                                                                key={value.id}
                                                                style={{
                                                                    color:
                                                                        finalCafe ===
                                                                        item
                                                                            ? "#c1c1c1"
                                                                            : "#606060",
                                                                }}
                                                            >
                                                                {index === 0
                                                                    ? `${value.name}`
                                                                    : `・${value.name}`}
                                                            </div>
                                                        )
                                                    )}
                                            </div>
                                        </div>
                                    ))
                                ) : finalCafe ? (
                                    <div className="flex flex-col w-full p-3 border-2 border-[#6e3bff] bg-[#6e3bff] rounded-2xl gap-1">
                                        <div className="text-white font-[#Pretendard-SemiBold] text-lg">
                                            {finalCafe}
                                        </div>
                                        <div className="flex gap-1">
                                            {cafeArrays
                                                .find(
                                                    (items) =>
                                                        items.name === finalCafe
                                                )
                                                .rankedMenuResponseList.map(
                                                    (value, index) => (
                                                        <div
                                                            className="text-xs text-[#c1c1c1]"
                                                            key={value.id}
                                                        >
                                                            {index === 0
                                                                ? `${value.name}`
                                                                : `・${value.name}`}
                                                        </div>
                                                    )
                                                )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex text-center w-full p-3 border-[1px] border-[#c1c1c1] rounded-2xl gap-1">
                                        {cafeList.map((item, index) => (
                                            <div
                                                className="text-[#c1c1c1] text-lg font-[Pretendard-SemiBold]"
                                                key={index}
                                            >
                                                {index === 0
                                                    ? `${item}`
                                                    : `・${item}`}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : val === "술집" ? (
                        <div
                            key={idx}
                            className="flex flex-col gap-4 cursor-pointer"
                            onClick={() => setFocus(val)}
                        >
                            <div className="flex items-center gap-1.5 pt-6 ">
                                <svg
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.1168 10.0437L17.6034 5.16533C17.5434 4.59699 17.0651 4.16699 16.4934 4.16699H7.4901C6.9201 4.16699 6.4401 4.59866 6.3801 5.16533L5.86844 10.0437C5.51177 13.4337 7.96677 16.4153 11.2634 16.802V18.7453L8.92177 19.272C8.55177 19.3553 8.2901 19.6837 8.2901 20.062C8.2901 20.5103 8.65344 20.872 9.1001 20.872H14.8851C15.3334 20.872 15.6951 20.5087 15.6951 20.062C15.6951 19.6837 15.4318 19.3553 15.0634 19.272L12.7218 18.7453V16.802C16.0184 16.4137 18.4734 13.4337 18.1168 10.0437Z"
                                        fill={
                                            focus === val
                                                ? "#606060"
                                                : "#c1c1c1"
                                        }
                                    />
                                </svg>

                                <div
                                    className="font-[Pretendard-Bold] text-xl"
                                    style={{
                                        color:
                                            focus === val
                                                ? "#606060"
                                                : "#c1c1c1",
                                    }}
                                >
                                    {val}
                                </div>
                            </div>

                            {/* 술집 리스트 */}
                            <div className="flex flex-col gap-2">
                                {focus === val ? (
                                    barList.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="cursor-pointer flex flex-col gap-2 w-full p-3 border-2 border-[#6e3bff] rounded-2xl"
                                            style={{
                                                backgroundColor:
                                                    finalBar === item
                                                        ? "#6e3bff"
                                                        : "#ffffff",
                                            }}
                                            onClick={() => setFinalBar(item)}
                                        >
                                            <div
                                                className="font-[Pretendard-SemiBold] text-lg"
                                                style={{
                                                    color:
                                                        finalBar === item
                                                            ? "#ffffff"
                                                            : "#323232",
                                                }}
                                            >
                                                {item}
                                            </div>
                                            <div className="flex gap-1">
                                                {barArrays
                                                    .find(
                                                        (items) =>
                                                            items.name === item
                                                    )
                                                    .rankedMenuResponseList.map(
                                                        (value, index) => (
                                                            <div
                                                                className="text-xs "
                                                                key={value.id}
                                                                style={{
                                                                    color:
                                                                        finalBar ===
                                                                        item
                                                                            ? "#c1c1c1"
                                                                            : "#606060",
                                                                }}
                                                            >
                                                                {index === 0
                                                                    ? `${value.name}`
                                                                    : `・${value.name}`}
                                                            </div>
                                                        )
                                                    )}
                                            </div>
                                        </div>
                                    ))
                                ) : finalBar ? (
                                    <div className="flex flex-col w-full p-3 border-2 border-[#6e3bff] bg-[#6e3bff] rounded-2xl gap-1">
                                        <div className="text-white font-[#Pretendard-SemiBold] text-lg">
                                            {finalBar}
                                        </div>
                                        <div className="flex gap-1">
                                            {barArrays
                                                .find(
                                                    (items) =>
                                                        items.name === finalBar
                                                )
                                                .rankedMenuResponseList.map(
                                                    (value, index) => (
                                                        <div
                                                            className="text-xs text-[#c1c1c1]"
                                                            key={value.id}
                                                        >
                                                            {index === 0
                                                                ? `${value.name}`
                                                                : `・${value.name}`}
                                                        </div>
                                                    )
                                                )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex text-center w-full p-3 border-[1px] border-[#c1c1c1] rounded-2xl gap-1">
                                        {barList.map((item, index) => (
                                            <div
                                                className="text-[#c1c1c1] text-lg font-[Pretendard-SemiBold]"
                                                key={index}
                                            >
                                                {index === 0
                                                    ? `${item}`
                                                    : `・${item}`}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : null
                ) : null
            )}

            <div
                className={`absolute bottom-4  w-full flex justify-center items-center p-4 cursor-pointer bg-[#6e3bff] "opacity-100 pointer-events-auto" rounded-xl`}
                onClick={onFinalPage}
            >
                <div className="text-white">완료</div>
            </div>
        </div>
    );
}
