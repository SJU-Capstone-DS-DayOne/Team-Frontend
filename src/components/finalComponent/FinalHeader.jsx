import { useStore } from "zustand";
import storeCategory from "../../clients/CategoryState";
import storePlaceTag from "../../clients/PlaceTagInfor";
import storeDepositUserInfor from "../../clients/DepositUserInfor";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import storeListSelect from "../../clients/ListSelect";

export default function Header() {
    const { isSelect } = useStore(storeCategory);
    const { name } = useStore(storePlaceTag);
    const { nickname } = useStore(storeDepositUserInfor);
    const { restaurantArrays, cafeArrays, barArrays } =
        useStore(storeListSelect);

    const navi = useNavigate();

    useEffect(() => {
        if (
            restaurantArrays.length === 0 ||
            (isSelect["카페"] && cafeArrays.length === 0) ||
            (isSelect["술집"] && barArrays.length === 0)
        ) {
            navi("/infor");
        }
    }, []);

    return (
        <div className="flex items-center justify-between w-full h-full bg-opacity-60 backdrop-blur-xl border-b-[1px] border-b-[#d9d9d9] px-24">
            <Link
                to="/main"
                className="font-[Pretendard-Bold] text-[#6E3Bff] text-[36px] cursor-pointer"
            >
                Palette
            </Link>

            <Link
                to="/infor"
                className="flex items-center gap-4 px-5 py-2 cursor-pointer xl:py-3"
            >
                <div className="font-[Pretendard-SemiBold] text-[#606060]">
                    {name}
                </div>
                <div className="flex gap-2 ">
                    {Object.keys(isSelect).map((val, idx) => (
                        <div
                            className="flex items-center justify-center rounded-full size-8 bg-[#6e3bff]"
                            key={idx}
                        >
                            {val === "식당" ? (
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_226_1675)">
                                        <path
                                            d="M19.1537 10.7148L18.2837 6.19318C18.0454 4.77651 17.1287 3.39818 15.8287 2.78485C15.1471 2.46318 14.3637 2.95818 14.3604 3.71151L14.2754 19.8632C14.2737 20.2948 14.4504 20.7098 14.7654 21.0048L14.8054 21.0432C15.4037 21.6032 16.3337 21.6032 16.9304 21.0432C17.2687 20.7248 17.4487 20.2732 17.4187 19.8082L17.0471 14.0965C17.0204 13.6898 17.2804 13.3182 17.6721 13.2032C18.7421 12.8898 19.3904 11.8032 19.1537 10.7115V10.7148Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M11.3387 2.6665C10.9337 2.6665 10.6053 2.99484 10.6053 3.39984V7.6115C10.6053 8.0215 10.2737 8.35317 9.86366 8.35317C9.45366 8.35317 9.12199 8.0215 9.12199 7.6115V3.39984C9.12199 2.99484 8.79366 2.6665 8.38866 2.6665H8.36866C7.96366 2.6665 7.63533 2.99484 7.63533 3.39984V7.6115C7.63533 8.0215 7.30366 8.35317 6.89366 8.35317C6.48366 8.35317 6.15199 8.0215 6.15199 7.6115V3.39984C6.15199 2.99484 5.82366 2.6665 5.41866 2.6665H5.39866C4.99533 2.6665 4.66699 2.99484 4.66699 3.39984V8.90817C4.66699 10.5298 5.43199 12.0565 6.73199 13.0265L6.85866 13.1215C7.09533 13.2982 7.22533 13.5815 7.20699 13.8765L6.82366 19.7615C6.79533 20.1998 6.92866 20.6415 7.22533 20.9648C7.84366 21.6365 8.89699 21.6365 9.51533 20.9648C9.81199 20.6415 9.94533 20.1998 9.91699 19.7615L9.53366 13.8765C9.51366 13.5815 9.64533 13.2982 9.88199 13.1215L10.0087 13.0265C11.3087 12.0565 12.0737 10.5298 12.0737 8.90817V3.39984C12.0737 2.99484 11.7453 2.6665 11.3403 2.6665H11.3387Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_226_1675">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            ) : val === "카페" ? (
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.8417 18.3301H4.23C3.82667 18.3301 3.5 18.6567 3.5 19.0601C3.5 19.4634 3.82667 19.7901 4.23 19.7901H16.8433C17.2467 19.7901 17.5733 19.4634 17.5733 19.0601C17.5733 18.6567 17.2467 18.3301 16.8433 18.3301H16.8417Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M17.317 5.49183H16.6787L16.687 5.17683C16.6987 4.71516 16.3287 4.3335 15.8654 4.3335H4.87369C4.41036 4.3335 4.04036 4.71516 4.05203 5.17683L4.20536 11.0085C4.29369 14.3502 7.02703 17.0135 10.3704 17.0135C13.4687 17.0135 16.042 14.7252 16.472 11.7302H17.3187C19.042 11.7302 20.4387 10.3335 20.4387 8.61016C20.4387 6.88683 19.042 5.49016 17.3187 5.49016L17.317 5.49183ZM17.317 10.2202H16.5537L16.6387 7.0035H17.317C18.2037 7.0035 18.9254 7.72516 18.9254 8.61183C18.9254 9.4985 18.2037 10.2202 17.317 10.2202Z"
                                        fill="white"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.1168 9.54317L17.6034 4.66484C17.5434 4.0965 17.0651 3.6665 16.4934 3.6665H7.4901C6.9201 3.6665 6.4401 4.09817 6.3801 4.66484L5.86844 9.54317C5.51177 12.9332 7.96677 15.9148 11.2634 16.3015V18.2448L8.92177 18.7715C8.55177 18.8548 8.2901 19.1832 8.2901 19.5615C8.2901 20.0098 8.65344 20.3715 9.1001 20.3715H14.8851C15.3334 20.3715 15.6951 20.0082 15.6951 19.5615C15.6951 19.1832 15.4318 18.8548 15.0634 18.7715L12.7218 18.2448V16.3015C16.0184 15.9132 18.4734 12.9332 18.1168 9.54317Z"
                                        fill="white"
                                    />
                                </svg>
                            )}
                        </div>
                    ))}
                </div>
            </Link>

            <Link
                to={"/profile"}
                className="flex gap-1 border-b-2 border-b-[#c1c1c1] cursor-pointer"
            >
                <div className="text-[#6e3bff] font-[Pretendard-SemiBold] text-lg">
                    {nickname}
                </div>
                <div className="text-[#c1c1c1] text-lg">님</div>
            </Link>
        </div>
    );
}
