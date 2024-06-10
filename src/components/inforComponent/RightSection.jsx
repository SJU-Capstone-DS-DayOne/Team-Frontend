import { useStore } from "zustand";
import storePlaceTag from "../../clients/PlaceTagInfor";
import storeCategory from "../../clients/CategoryState";
import { getTypeInformation } from "../../apis/getTypeInformation";
// import { getAi } from "../../apis/getAi";
import storeListSelect from "../../clients/ListSelect";
import { useNavigate } from "react-router-dom";

export default function RightSection() {
    const { name, names, onClick } = useStore(storePlaceTag);
    const { onChange, isSelect } = useStore(storeCategory);
    const { setRestaurantArrays, setCafeArrays, setBarArrays } =
        useStore(storeListSelect);

    const navi = useNavigate();

    const onClickCategory = (event, val) => {
        event.stopPropagation();

        if (val !== undefined) {
            onChange(val);
        }
    };

    const onClickRecommend = async () => {
        const result = await getTypeInformation(name, isSelect);
        Object.keys(isSelect).map((val) => {
            if (isSelect[val]) {
                if (val === "식당") {
                    setRestaurantArrays(
                        result.data.rstRestaurantOverviewResponseList
                    );
                } else if (val === "카페") {
                    setCafeArrays(
                        result.data.cafeRestaurantOverviewResponseList
                    );
                } else {
                    setBarArrays(result.data.barRestaurantOverviewResponseList);
                }
            }
        });
        navi("/main");
        // const result = await getAi();
        // console.log(result);
    };

    return (
        <div className="flex flex-col w-[330px]">
            <div className="flex flex-col">
                <div className="text-lg text-[#606060] mt-4 mb-3">장소</div>
                <div className="flex flex-wrap gap-2">
                    {names.map((val, idx) => (
                        <button
                            className="flex items-center justify-center rounded-2xl border-[1px] px-3 py-1 border-[#f3f3f3]"
                            style={{
                                backgroundColor:
                                    val === name ? "#6e3bff" : "#f3f3f3",
                                pointerEvents: idx <= 2 ? "auto" : "none",
                            }}
                            key={idx}
                            onClick={onClick}
                        >
                            <div
                                className="text-center "
                                style={{
                                    color: val === name ? "#ffffff" : "#606060",
                                }}
                            >
                                {val}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col">
                <div className="text-lg text-[#606060] mt-4 mb-3">카테고리</div>
                <div className="flex justify-between w-full">
                    {Object.keys(isSelect).map((val, idx) => (
                        <div
                            className="flex flex-col items-center size-[100px] border-[1px] justify-center  gap-2 cursor-pointer rounded-2xl"
                            key={idx}
                            style={{
                                borderColor: idx !== 0 ? "[#c2c2c2]" : null,
                                backgroundColor: isSelect[val]
                                    ? "#6E3BFF"
                                    : "#f3f3f3",
                            }}
                            onClick={
                                idx !== 0
                                    ? (event) => onClickCategory(event, val)
                                    : null
                            }
                        >
                            {idx === 0 ? (
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={(event) =>
                                        onClickCategory(event, val)
                                    }
                                >
                                    <g clipPath="url(#clip0_205_3070)">
                                        <path
                                            d="M31.9216 17.8583L30.4716 10.3222C30.0744 7.9611 28.5466 5.66388 26.3799 4.64165C25.2438 4.10554 23.9383 4.93054 23.9327 6.1861L23.791 33.1055C23.7883 33.825 24.0827 34.5167 24.6077 35.0083L24.6744 35.0722C25.6716 36.0055 27.2216 36.0055 28.216 35.0722C28.7799 34.5417 29.0799 33.7889 29.0299 33.0139L28.4105 23.4944C28.366 22.8167 28.7994 22.1972 29.4521 22.0055C31.2355 21.4833 32.316 19.6722 31.9216 17.8528V17.8583Z"
                                            fill={
                                                !isSelect[val]
                                                    ? "#606060"
                                                    : "#ffffff"
                                            }
                                        />
                                        <path
                                            d="M18.8968 4.44446C18.2218 4.44446 17.6746 4.99168 17.6746 5.66668V12.6861C17.6746 13.3695 17.1218 13.9222 16.4385 13.9222C15.7551 13.9222 15.2023 13.3695 15.2023 12.6861V5.66668C15.2023 4.99168 14.6551 4.44446 13.9801 4.44446H13.9468C13.2718 4.44446 12.7246 4.99168 12.7246 5.66668V12.6861C12.7246 13.3695 12.1718 13.9222 11.4885 13.9222C10.8051 13.9222 10.2523 13.3695 10.2523 12.6861V5.66668C10.2523 4.99168 9.70512 4.44446 9.03012 4.44446H8.99679C8.32457 4.44446 7.77734 4.99168 7.77734 5.66668V14.8472C7.77734 17.55 9.05234 20.0945 11.219 21.7111L11.4301 21.8695C11.8246 22.1639 12.0412 22.6361 12.0107 23.1278L11.3718 32.9361C11.3246 33.6667 11.5468 34.4028 12.0412 34.9417C13.0718 36.0611 14.8273 36.0611 15.8579 34.9417C16.3523 34.4028 16.5746 33.6667 16.5273 32.9361L15.8885 23.1278C15.8551 22.6361 16.0746 22.1639 16.469 21.8695L16.6801 21.7111C18.8468 20.0945 20.1218 17.55 20.1218 14.8472V5.66668C20.1218 4.99168 19.5746 4.44446 18.8996 4.44446H18.8968Z"
                                            fill={
                                                !isSelect[val]
                                                    ? "#606060"
                                                    : "#ffffff"
                                            }
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_205_3070">
                                            <rect
                                                width="40"
                                                height="40"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            ) : idx === 1 ? (
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={(event) =>
                                        onClickCategory(event, val)
                                    }
                                >
                                    <path
                                        d="M28.0691 30.55H7.04967C6.37745 30.55 5.83301 31.0945 5.83301 31.7667C5.83301 32.4389 6.37745 32.9834 7.04967 32.9834H28.0719C28.7441 32.9834 29.2886 32.4389 29.2886 31.7667C29.2886 31.0945 28.7441 30.55 28.0719 30.55H28.0691Z"
                                        fill={
                                            !isSelect[val]
                                                ? "#606060"
                                                : "#ffffff"
                                        }
                                    />
                                    <path
                                        d="M28.8607 9.15272H27.7968L27.8107 8.62772C27.8302 7.85828 27.2135 7.22217 26.4413 7.22217H8.12185C7.34962 7.22217 6.73296 7.85828 6.7524 8.62772L7.00796 18.3472C7.15518 23.9166 11.7107 28.3555 17.283 28.3555C22.4468 28.3555 26.7357 24.5416 27.4524 19.5499H28.8635C31.7357 19.5499 34.0635 17.2222 34.0635 14.3499C34.0635 11.4777 31.7357 9.14995 28.8635 9.14995L28.8607 9.15272ZM28.8607 17.0333H27.5885L27.7302 11.6722H28.8607C30.3385 11.6722 31.5413 12.8749 31.5413 14.3527C31.5413 15.8305 30.3385 17.0333 28.8607 17.0333Z"
                                        fill={
                                            !isSelect[val]
                                                ? "#606060"
                                                : "#ffffff"
                                        }
                                    />
                                </svg>
                            ) : (
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={(event) =>
                                        onClickCategory(event, val)
                                    }
                                >
                                    <path
                                        d="M30.1949 15.9055L29.3394 7.77497C29.2394 6.82775 28.4422 6.11108 27.4894 6.11108H12.4838C11.5338 6.11108 10.7338 6.83053 10.6338 7.77497L9.78105 15.9055C9.18661 21.5555 13.2783 26.525 18.7727 27.1694V30.4083L14.8699 31.2861C14.2533 31.425 13.8172 31.9722 13.8172 32.6028C13.8172 33.35 14.4227 33.9527 15.1672 33.9527H24.8088C25.5561 33.9527 26.1588 33.3472 26.1588 32.6028C26.1588 31.9722 25.7199 31.425 25.1061 31.2861L21.2033 30.4083V27.1694C26.6977 26.5222 30.7894 21.5555 30.1949 15.9055Z"
                                        fill={
                                            !isSelect[val]
                                                ? "#606060"
                                                : "#ffffff"
                                        }
                                    />
                                </svg>
                            )}
                            <div
                                className="font-[Pretendard-Semibold]"
                                style={{
                                    color: !isSelect[val]
                                        ? "#606060"
                                        : "#ffffff",
                                }}
                            >
                                {val}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center w-full font-semibold text-[#606060] mt-6 mb-4">
                <div className="text-[#6E3BFF] font-bold">{name}</div>의
                {Object.keys(isSelect).map((val, idx) =>
                    isSelect[val] ? (
                        <div
                            className="text-[#6E3BFF] font-bold ml-1"
                            key={idx}
                        >
                            {val}
                        </div>
                    ) : null
                )}
                에서 데이트를 하고 싶어!
            </div>

            <div
                className="w-full p-4 bg-[#6e3bff] flex justify-center items-center text-white cursor-pointer text-sm
             rounded-xl font-[Pretendard-Semibold]"
                onClick={onClickRecommend}
            >
                AI 기반 데이트코스 찾기
            </div>
        </div>
    );
}
