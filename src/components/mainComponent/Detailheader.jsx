/* eslint-disable eqeqeq */
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "zustand";
import storeListSelect from "../../clients/ListSelect";
import storeCategoryFocus from "../../clients/CategoryFocus";
import { useEffect, useState } from "react";
import storeDetailInfor from "../../clients/DetailInfor";

export default function Detailheader() {
    const [select, setSelect] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const {
        addRestaurant,
        addCafe,
        addBar,
        removeRestaurant,
        removeCafe,
        removeBar,
        restaurantList,
        cafeList,
        barList,
    } = useStore(storeListSelect);
    const { focus, setFocus } = useStore(storeCategoryFocus);
    const { detailInfor } = useStore(storeDetailInfor);
    useEffect(() => {
        if (restaurantList.includes(detailInfor.name)) {
            setSelect(true);
        }
    }, []);

    const onClickSelect = () => {
        setSelect(!select);
        if (focus === "식당") {
            if (restaurantList.includes(detailInfor.name)) {
                removeRestaurant(detailInfor.name);
            } else {
                if (restaurantList.length < 3) {
                    addRestaurant(detailInfor.name);
                    if (restaurantList.length === 2) {
                        if (cafeList.length < 3) {
                            setFocus("카페");
                            navigate("/main");
                        } else {
                            if (barList.length < 3) {
                                setFocus("술집");
                                navigate("/main");
                            } else {
                                navigate("/final");
                            }
                        }
                    } else {
                        navigate("/main");
                    }
                }
            }
        } else if (focus === "카페") {
            if (cafeList.includes(detailInfor.name)) {
                removeCafe(detailInfor.name);
            } else {
                if (cafeList.length < 3) {
                    addCafe(detailInfor.name);
                    if (cafeList.length === 2) {
                        if (restaurantList.length < 3) {
                            setFocus("식당");
                            navigate("/main");
                        } else {
                            if (barList.length < 3) {
                                setFocus("술집");
                                navigate("/main");
                            } else {
                                navigate("/final");
                            }
                        }
                    } else {
                        navigate("/main");
                    }
                }
            }
        } else {
            if (barList.includes(detailInfor.name)) {
                removeBar(detailInfor.name);
            } else {
                if (barList.length < 3) {
                    addBar(detailInfor.name);
                    if (barList.length === 2) {
                        if (restaurantList.length < 3) {
                            setFocus("식당");
                            navigate("/main");
                        } else {
                            if (cafeList.length < 3) {
                                setFocus("카페");
                                navigate("/main");
                            } else {
                                navigate("/final");
                            }
                        }
                    } else {
                        navigate("/main");
                    }
                }
            }
        }
    };
    const onClickBack = () => {
        navigate("/main");
    };

    return (
        <>
            <div className="flex items-center gap-3">
                <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={onClickBack}
                    className="cursor-pointer"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.3983 6.26342C25.0812 6.89759 25.1208 7.96532 24.4866 8.64827L15.8028 18L24.4866 27.3517C25.1208 28.0347 25.0812 29.1024 24.3983 29.7366C23.7153 30.3708 22.6476 30.3312 22.0134 29.6483L12.2634 19.1483C11.6622 18.5008 11.6622 17.4992 12.2634 16.8517L22.0134 6.35175C22.6476 5.6688 23.7153 5.62925 24.3983 6.26342Z"
                        fill="#6E3BFF"
                    />
                </svg>

                <div className="flex justify-start h-full text-white">
                    <div className="text-2xl font-[Pretendard-Bold] text-[#323232]">
                        {detailInfor.name}
                    </div>
                </div>
            </div>

            <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={onClickSelect}
            >
                <div
                    className="font-[Pretendard-SemiBold] text-[#c1c1c1] cursor-pointer text-lg"
                    style={{
                        color: select ? "#6E3BFF" : "#c1c1c1",
                    }}
                >
                    코스 담기
                </div>
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="16"
                        cy="16"
                        r="14.5"
                        fill={select ? "#6e3bff" : "#E2E2E2"}
                        stroke={select ? "#6e3bff" : "#E2E2E2"}
                        strokeWidth="3"
                    />
                    <path
                        d="M8.7998 16.1806L13.2729 20.8002L22.6665 11.2002"
                        stroke={select ? "#ffffff" : "#f3f3f3"}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </>
    );
}
