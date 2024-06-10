import { useStore } from "zustand";
import storeFinalSelect from "../../clients/FinalSelect";
import storeListSelect from "../../clients/ListSelect";
import storeMinDistance from "../../clients/MinDistance";
import storeMinDuration from "../../clients/MinDuration";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function DateCourseAside() {
    const { finalRestaurant, finalCafe, finalBar } = useStore(storeFinalSelect);
    const { restaurantArrays, cafeArrays, barArrays } =
        useStore(storeListSelect);
    const finalResaurantInfor = restaurantArrays.find(
        (items) => items.name === finalRestaurant
    );
    const finalCafeInfor = cafeArrays.find((items) => items.name === finalCafe);
    const finalBarInfor = barArrays.find((items) => items.name === finalBar);
    const { distance, onClearDistance } = useStore(storeMinDistance);
    const { duration, onClearDuration } = useStore(storeMinDuration);

    useEffect(() => {
        onClearDistance();
        onClearDuration();
    }, []);

    return (
        <div className="relative z-20 flex flex-col w-[28%] h-full items-center">
            <div className="text-[#6e3bff] font-[Pretendard-Bold] text-2xl mt-10">
                데이트 코스가 완성되었습니다!
            </div>
            <div className="flex flex-col items-center w-full mt-10">
                {finalResaurantInfor && (
                    <div className="flex gap-4 p-4 border-2 border-[#6e3bff] w-full rounded-2xl">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="24" cy="24" r="24" fill="#6E3BFF" />
                            <g clipPath="url(#clip0_343_3181)">
                                <path
                                    d="M34.1336 22.1792L32.9011 15.7735C32.5635 13.7666 31.2649 11.814 29.4232 10.9451C28.4575 10.4894 27.3478 11.1906 27.3431 12.2579L27.2227 35.1394C27.2203 35.7509 27.4706 36.3388 27.9168 36.7567L27.9735 36.811C28.8211 37.6044 30.1386 37.6044 30.9839 36.811C31.4632 36.3601 31.7182 35.7202 31.6757 35.0615L31.1492 26.9699C31.1114 26.3938 31.4798 25.8673 32.0346 25.7044C33.5505 25.2605 34.4689 23.721 34.1336 22.1745V22.1792Z"
                                    fill="white"
                                />
                                <path
                                    d="M23.0629 10.7773C22.4891 10.7773 22.024 11.2425 22.024 11.8162V17.7828C22.024 18.3636 21.5541 18.8335 20.9733 18.8335C20.3924 18.8335 19.9226 18.3636 19.9226 17.7828V11.8162C19.9226 11.2425 19.4574 10.7773 18.8837 10.7773H18.8554C18.2816 10.7773 17.8165 11.2425 17.8165 11.8162V17.7828C17.8165 18.3636 17.3466 18.8335 16.7658 18.8335C16.1849 18.8335 15.7151 18.3636 15.7151 17.7828V11.8162C15.7151 11.2425 15.2499 10.7773 14.6762 10.7773H14.6479C14.0765 10.7773 13.6113 11.2425 13.6113 11.8162V19.6197C13.6113 21.9171 14.6951 24.0798 16.5367 25.454L16.7162 25.5886C17.0515 25.8389 17.2356 26.2403 17.2097 26.6582L16.6666 34.9953C16.6265 35.6162 16.8154 36.2419 17.2356 36.7C18.1116 37.6515 19.6038 37.6515 20.4798 36.7C20.9001 36.2419 21.089 35.6162 21.0488 34.9953L20.5058 26.6582C20.4774 26.2403 20.664 25.8389 20.9992 25.5886L21.1787 25.454C23.0204 24.0798 24.1041 21.9171 24.1041 19.6197V11.8162C24.1041 11.2425 23.639 10.7773 23.0652 10.7773H23.0629Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_343_3181">
                                    <rect
                                        width="34"
                                        height="34"
                                        fill="white"
                                        transform="translate(7 7)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="flex flex-col gap-1">
                            <div className="font-[Pretendard-Bold] text-lg text-[#6e3bff]">
                                {finalResaurantInfor.name}
                            </div>
                            <div className="flex gap-[2px] flex-wrap">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.0512 7.98228C14.799 5.40672 12.7406 3.31774 10.1701 3.03497C6.82776 2.66558 4 5.2717 4 8.53764C4 8.63444 4 8.7287 4.00764 8.82296C4.07388 10.112 4.64707 11.3246 5.54126 12.2545L8.86069 15.7115C9.23008 16.0962 9.84913 16.0962 10.2185 15.7115L13.5405 12.2519C14.4092 11.3476 14.9799 10.1782 15.0665 8.92486C15.0869 8.61661 15.0843 8.30072 15.0537 7.97973L15.0512 7.98228ZM9.53834 9.50061C8.6951 9.50061 8.00982 8.81532 8.00982 7.97209C8.00982 7.12885 8.6951 6.44357 9.53834 6.44357C10.3816 6.44357 11.0669 7.12885 11.0669 7.97209C11.0669 8.81532 10.3816 9.50061 9.53834 9.50061Z"
                                        fill="#C1C1C1"
                                    />
                                </svg>
                                <div className="text-[#7f7f7f] text-sm">
                                    {finalResaurantInfor.address
                                        ? finalResaurantInfor.address
                                        : "서울시 광진구 용마산로 12"}
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-1">
                                {finalResaurantInfor.rankedMenuResponseList
                                    .sort((a, b) => a.ranking - b.ranking)
                                    .map((val, idx) => (
                                        <div
                                            className="text-[#606060] text-xs flex"
                                            key={val.id}
                                        >
                                            {idx !== 0 && (
                                                <div className="font-[Pretendard-Bold]">
                                                    ・
                                                </div>
                                            )}
                                            {val.name}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                )}
                {(finalBarInfor || finalCafeInfor) && (
                    <svg
                        width="2"
                        height="32"
                        viewBox="0 0 2 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 0L0.999999 32"
                            stroke="#6E3BFF"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                        />
                    </svg>
                )}

                {finalCafeInfor && (
                    <div className="flex gap-4 p-4 border-2 border-[#6e3bff] w-full rounded-2xl">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="24" cy="24" r="24" fill="#6E3BFF" />
                            <path
                                d="M31.9222 32.9678H14.0557C13.4843 32.9678 13.0215 33.4306 13.0215 34.0019C13.0215 34.5733 13.4843 35.0361 14.0557 35.0361H31.9245C32.4959 35.0361 32.9587 34.5733 32.9587 34.0019C32.9587 33.4306 32.4959 32.9678 31.9245 32.9678H31.9222Z"
                                fill="white"
                            />
                            <path
                                d="M32.5952 14.7796H31.6909L31.7027 14.3334C31.7192 13.6794 31.1951 13.1387 30.5387 13.1387H14.9671C14.3108 13.1387 13.7866 13.6794 13.8031 14.3334L14.0203 22.5949C14.1455 27.329 18.0177 31.102 22.7541 31.102C27.1434 31.102 30.7889 27.8602 31.3981 23.6173H32.5976C35.039 23.6173 37.0176 21.6387 37.0176 19.1973C37.0176 16.7559 35.039 14.7773 32.5976 14.7773L32.5952 14.7796ZM32.5952 21.4781H31.5138L31.6342 16.9212H32.5952C33.8513 16.9212 34.8737 17.9435 34.8737 19.1996C34.8737 20.4558 33.8513 21.4781 32.5952 21.4781Z"
                                fill="white"
                            />
                        </svg>

                        <div className="flex flex-col gap-1">
                            <div className="font-[Pretendard-Bold] text-lg text-[#6e3bff]">
                                {finalCafeInfor.name}
                            </div>
                            <div className="flex gap-[2px]">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.0512 7.98228C14.799 5.40672 12.7406 3.31774 10.1701 3.03497C6.82776 2.66558 4 5.2717 4 8.53764C4 8.63444 4 8.7287 4.00764 8.82296C4.07388 10.112 4.64707 11.3246 5.54126 12.2545L8.86069 15.7115C9.23008 16.0962 9.84913 16.0962 10.2185 15.7115L13.5405 12.2519C14.4092 11.3476 14.9799 10.1782 15.0665 8.92486C15.0869 8.61661 15.0843 8.30072 15.0537 7.97973L15.0512 7.98228ZM9.53834 9.50061C8.6951 9.50061 8.00982 8.81532 8.00982 7.97209C8.00982 7.12885 8.6951 6.44357 9.53834 6.44357C10.3816 6.44357 11.0669 7.12885 11.0669 7.97209C11.0669 8.81532 10.3816 9.50061 9.53834 9.50061Z"
                                        fill="#C1C1C1"
                                    />
                                </svg>
                                <div className="text-[#7f7f7f] text-sm">
                                    {finalCafeInfor.address
                                        ? finalCafeInfor.address
                                        : "서울시 광진구 용마산로 12"}
                                </div>
                            </div>
                            <div className="flex gap-1">
                                {finalCafeInfor.rankedMenuResponseList
                                    .sort((a, b) => a.ranking - b.ranking)
                                    .map((val, idx) => (
                                        <div
                                            className="text-[#606060] text-xs flex"
                                            key={val.id}
                                        >
                                            {idx !== 0 && (
                                                <div className="font-[Pretendard-Bold]">
                                                    ・
                                                </div>
                                            )}
                                            {val.name.length > 6
                                                ? val.name.slice(0, 6)
                                                : val.name}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                )}
                {finalBarInfor && (
                    <svg
                        width="2"
                        height="32"
                        viewBox="0 0 2 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 0L0.999999 32"
                            stroke="#6E3BFF"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                        />
                    </svg>
                )}

                {finalBarInfor && (
                    <div className="flex gap-4 p-4 border-2 border-[#6e3bff] w-full rounded-2xl">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="24" cy="24" r="24" fill="#6E3BFF" />
                            <path
                                d="M32.6662 20.5196L31.939 13.6086C31.854 12.8035 31.1764 12.1943 30.3665 12.1943H17.6118C16.8043 12.1943 16.1243 12.8059 16.0393 13.6086L15.3144 20.5196C14.8092 25.3221 18.2871 29.5461 22.9574 30.0939V32.847L19.64 33.5931C19.1158 33.7111 18.7451 34.1763 18.7451 34.7123C18.7451 35.3474 19.2599 35.8598 19.8926 35.8598H28.088C28.7232 35.8598 29.2355 35.345 29.2355 34.7123C29.2355 34.1763 28.8625 33.7111 28.3407 33.5931L25.0233 32.847V30.0939C29.6936 29.5438 33.1715 25.3221 32.6662 20.5196Z"
                                fill="white"
                            />
                        </svg>

                        <div className="flex flex-col gap-1">
                            <div className="font-[Pretendard-Bold] text-lg text-[#6e3bff]">
                                {finalBarInfor.name}
                            </div>
                            <div className="flex gap-[2px]">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.0512 7.98228C14.799 5.40672 12.7406 3.31774 10.1701 3.03497C6.82776 2.66558 4 5.2717 4 8.53764C4 8.63444 4 8.7287 4.00764 8.82296C4.07388 10.112 4.64707 11.3246 5.54126 12.2545L8.86069 15.7115C9.23008 16.0962 9.84913 16.0962 10.2185 15.7115L13.5405 12.2519C14.4092 11.3476 14.9799 10.1782 15.0665 8.92486C15.0869 8.61661 15.0843 8.30072 15.0537 7.97973L15.0512 7.98228ZM9.53834 9.50061C8.6951 9.50061 8.00982 8.81532 8.00982 7.97209C8.00982 7.12885 8.6951 6.44357 9.53834 6.44357C10.3816 6.44357 11.0669 7.12885 11.0669 7.97209C11.0669 8.81532 10.3816 9.50061 9.53834 9.50061Z"
                                        fill="#C1C1C1"
                                    />
                                </svg>
                                <div className="text-[#7f7f7f] text-sm">
                                    {finalBarInfor.address
                                        ? finalBarInfor.address
                                        : "서울시 광진구 용마산로 12"}
                                </div>
                            </div>
                            <div className="flex gap-1">
                                {finalBarInfor.rankedMenuResponseList
                                    .sort((a, b) => a.ranking - b.ranking)
                                    .map((val, idx) => (
                                        <div
                                            className="text-[#606060] text-xs flex"
                                            key={val.id}
                                        >
                                            {idx !== 0 && (
                                                <div className="font-[Pretendard-Bold]">
                                                    ・
                                                </div>
                                            )}
                                            {val.name}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                )}
                <div className="mt-6 text-sm text-[#323232] flex">
                    예상 이동 거리는
                    <div className="text-[#6e3bff]  ml-1 font-[Pretendard-SemiBold]">{`약 ${Math.round(
                        distance / 1000
                    )}km `}</div>
                    이며 예상 소요시간은{" "}
                    <div className="text-[#6e3bff]  ml-1 font-[Pretendard-SemiBold]">{`약 ${Math.round(
                        duration / 60
                    )}분 `}</div>
                    입니다
                </div>
            </div>
            <div className="absolute flex flex-col w-full gap-4 text-center bottom-4">
                <div className="text-[#7f7f7f] text-sm">
                    리뷰를 통해 연인과의 데이트 기록을 남겨보세요
                </div>
                <Link
                    to={"/history"}
                    className="w-full rounded-xl p-4 bg-[#6e3bff] text-center"
                >
                    <div className="text-white">리뷰 쓰러 가기</div>
                </Link>
            </div>
        </div>
    );
}
