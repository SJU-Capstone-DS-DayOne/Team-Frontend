import { useStore } from "zustand";
import storeCategory from "../../clients/CategoryState";
import storeCategoryFocus from "../../clients/CategoryFocus";
import storeListSelect from "../../clients/ListSelect";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function SelectCategory() {
    const { isSelect } = useStore(storeCategory);
    const { focus, setFocus, clearFocus } = useStore(storeCategoryFocus);
    const {
        restaurantList,
        removeRestaurant,
        cafeList,
        removeCafe,
        barList,
        removeBar,
        onClear,
    } = useStore(storeListSelect);

    useEffect(() => {
        if (restaurantList.length === 0) {
            onClear();
            clearFocus();
        }
    }, []);

    return (
        <div className="flex flex-col gap-2">
            {Object.keys(isSelect).map((val, idx) => (
                <Link
                    to={"/main"}
                    className="flex w-full rounded-2xl h-[10dvh] p-2 items-center cursor-pointer xl:p-3"
                    key={idx}
                    style={{
                        backgroundColor: isSelect[val] ? "#ffffff" : "#f3f3f3",
                        borderWidth: val === focus ? "2px" : "1px",
                        borderColor: val === focus ? "#6e3bff" : "#e2e2e2",
                        pointerEvents: !isSelect[val] ? "none" : "auto",
                    }}
                    onClick={() => setFocus(val)}
                >
                    {val === "식당" ? (
                        <>
                            <div className="flex flex-col items-center pr-2 xl:pr-4">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_282_907)">
                                        <path
                                            d="M25.5386 14.2869L24.3786 8.25806C24.0609 6.36917 22.8386 4.53139 21.1053 3.71362C20.1964 3.28473 19.152 3.94473 19.1475 4.94917L19.0342 26.4847C19.032 27.0603 19.2675 27.6136 19.6875 28.0069L19.7409 28.0581C20.5386 28.8047 21.7786 28.8047 22.5742 28.0581C23.0253 27.6336 23.2653 27.0314 23.2253 26.4114L22.7298 18.7958C22.6942 18.2536 23.0409 17.7581 23.5631 17.6047C24.9898 17.1869 25.8542 15.7381 25.5386 14.2825V14.2869Z"
                                            fill={
                                                isSelect[val]
                                                    ? "#6E3BFF"
                                                    : "#e2e2e2"
                                            }
                                        />
                                        <path
                                            d="M15.1182 3.55566C14.5782 3.55566 14.1404 3.99344 14.1404 4.53344V10.149C14.1404 10.6957 13.6982 11.1379 13.1515 11.1379C12.6049 11.1379 12.1627 10.6957 12.1627 10.149V4.53344C12.1627 3.99344 11.7249 3.55566 11.1849 3.55566H11.1582C10.6182 3.55566 10.1804 3.99344 10.1804 4.53344V10.149C10.1804 10.6957 9.73821 11.1379 9.19155 11.1379C8.64488 11.1379 8.20266 10.6957 8.20266 10.149V4.53344C8.20266 3.99344 7.76488 3.55566 7.22488 3.55566H7.19821C6.66043 3.55566 6.22266 3.99344 6.22266 4.53344V11.8779C6.22266 14.0401 7.24266 16.0757 8.97599 17.369L9.14488 17.4957C9.46043 17.7312 9.63377 18.109 9.60932 18.5023L9.09821 26.349C9.06043 26.9334 9.23821 27.5223 9.63377 27.9534C10.4582 28.849 11.8627 28.849 12.6871 27.9534C13.0827 27.5223 13.2604 26.9334 13.2227 26.349L12.7115 18.5023C12.6849 18.109 12.8604 17.7312 13.176 17.4957L13.3449 17.369C15.0782 16.0757 16.0982 14.0401 16.0982 11.8779V4.53344C16.0982 3.99344 15.6604 3.55566 15.1204 3.55566H15.1182Z"
                                            fill={
                                                isSelect[val]
                                                    ? "#6E3BFF"
                                                    : "#e2e2e2"
                                            }
                                        />
                                    </g>
                                </svg>

                                <div
                                    className="text-sm"
                                    style={{
                                        color: isSelect[val]
                                            ? "#6E3BFF"
                                            : "#e2e2e2",
                                    }}
                                >
                                    {val}
                                </div>
                            </div>
                            <div className="flex flex-wrap border-l-[1px] border-l-[#e2e2e2] w-full h-full">
                                {restaurantList.map((value, index) => (
                                    <div
                                        className="ml-2 text-[#323232] font-[Pretendard-SemiBold] pl-2 items-center flex cursor-pointer text-sm"
                                        onClick={() => removeRestaurant(value)}
                                        key={index}
                                    >
                                        {value}
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : val === "카페" ? (
                        <>
                            <div className="flex flex-col items-center gap-1 pr-2 xl:pr-4">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.4549 24.4399H6.63935C6.10157 24.4399 5.66602 24.8755 5.66602 25.4133C5.66602 25.9511 6.10157 26.3866 6.63935 26.3866H23.4571C23.9949 26.3866 24.4305 25.9511 24.4305 25.4133C24.4305 24.8755 23.9949 24.4399 23.4571 24.4399H23.4549Z"
                                        fill={
                                            isSelect[val]
                                                ? "#6E3BFF"
                                                : "#e2e2e2"
                                        }
                                    />
                                    <path
                                        d="M24.0894 7.32228H23.2383L23.2494 6.90228C23.2649 6.28672 22.7716 5.77783 22.1538 5.77783H7.49826C6.88048 5.77783 6.38715 6.28672 6.4027 6.90228L6.60715 14.6778C6.72492 19.1334 10.3694 22.6845 14.8271 22.6845C18.9583 22.6845 22.3894 19.6334 22.9627 15.6401H24.0916C26.3894 15.6401 28.2516 13.7778 28.2516 11.4801C28.2516 9.18228 26.3894 7.32005 24.0916 7.32005L24.0894 7.32228ZM24.0894 13.6267H23.0716L23.1849 9.33783H24.0894C25.2716 9.33783 26.2338 10.3001 26.2338 11.4823C26.2338 12.6645 25.2716 13.6267 24.0894 13.6267Z"
                                        fill={
                                            isSelect[val]
                                                ? "#6E3BFF"
                                                : "#e2e2e2"
                                        }
                                    />
                                </svg>

                                <div
                                    className="text-xs xl:text-sm"
                                    style={{
                                        color: isSelect[val]
                                            ? "#6E3BFF"
                                            : "#e2e2e2",
                                    }}
                                >
                                    {val}
                                </div>
                            </div>
                            <div className="flex flex-wrap border-l-[1px] border-l-[#e2e2e2] w-full h-full">
                                {cafeList.map((value, index) => (
                                    <div
                                        className="ml-2 text-[#323232] font-[Pretendard-SemiBold] pl-2 items-center flex cursor-pointer text-sm"
                                        onClick={() => removeCafe(value)}
                                        key={index}
                                    >
                                        {value}
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col items-center gap-1 pr-2 xl:pr-4">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M24.1554 12.7242L23.4709 6.21978C23.3909 5.46201 22.7531 4.88867 21.9909 4.88867H9.98648C9.22648 4.88867 8.58648 5.46423 8.50648 6.21978L7.82426 12.7242C7.3487 17.2442 10.622 21.2198 15.0176 21.7353V24.3265L11.8954 25.0287C11.402 25.1398 11.0531 25.5776 11.0531 26.082C11.0531 26.6798 11.5376 27.162 12.1331 27.162H19.8465C20.4443 27.162 20.9265 26.6776 20.9265 26.082C20.9265 25.5776 20.5754 25.1398 20.0843 25.0287L16.962 24.3265V21.7353C21.3576 21.2176 24.6309 17.2442 24.1554 12.7242Z"
                                        fill={
                                            isSelect[val]
                                                ? "#6E3BFF"
                                                : "#e2e2e2"
                                        }
                                    />
                                </svg>
                                <div
                                    className="text-sm"
                                    style={{
                                        color: isSelect[val]
                                            ? "#6E3BFF"
                                            : "#e2e2e2",
                                    }}
                                >
                                    {val}
                                </div>
                            </div>
                            <div className="flex flex-wrap border-l-[1px] border-l-[#e2e2e2] w-full h-full">
                                {barList.map((value, index) => (
                                    <div
                                        className="ml-2 text-[#323232] font-[Pretendard-SemiBold] pl-2 items-center flex cursor-pointer text-sm"
                                        onClick={() => removeBar(value)}
                                        key={index}
                                    >
                                        {value}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </Link>
            ))}
        </div>
    );
}
