import { useStore } from "zustand";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import WineBarIcon from "@mui/icons-material/WineBar";
import storeCategory from "../../clients/CategoryState";
import { Link } from "react-router-dom";
import { ArrowCircleUp } from "@mui/icons-material";
import storeInforScroll from "../../clients/InforScroll";
import { animateScroll } from "react-scroll";

export default function Category() {
    const { onChange, isSelect } = useStore(storeCategory);
    const { scroll, isScroll } = useStore(storeInforScroll);

    const onClick = (event) => {
        const value = event.target.innerText;
        if (value !== undefined) {
            onChange(value);
        }
    };

    const onClickTop = () => {
        if (scroll) {
            animateScroll.scrollToTop();
            isScroll();
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center gap-8 w-dvw h-dvh">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
                    데이트 코스는 어떤 걸 추천해드릴까요?
                </div>
                <div className="ml-3">
                    <RestaurantIcon
                        style={{
                            color: !isSelect["식당"] ? "#323232" : "#ff0000",
                        }}
                    />
                    <LocalCafeIcon
                        style={{
                            color: !isSelect["카페"] ? "#323232" : "#ff0000",
                        }}
                    />
                    <WineBarIcon
                        style={{
                            color: !isSelect["술집"] ? "#323232" : "#ff0000",
                        }}
                    />
                </div>
            </div>
            <div className="border-[1px] border-[#c6c6c6] w-3/4 h-1/2 flex ">
                {Object.keys(isSelect).map((val, idx) => (
                    <div
                        className="flex flex-col flex-1 cursor-pointer"
                        onClick={onClick}
                        key={idx}
                        style={{
                            borderRightWidth: idx === 2 ? "0px" : "2px",
                            backgroundColor: isSelect[val]
                                ? "#323232"
                                : "#ffffff",
                        }}
                    >
                        <div className="w-full border-b-[1px] border-[#c6c6c6] py-2 flex items-center gap-36">
                            {val === "식당" ? (
                                <RestaurantIcon
                                    style={{
                                        fontSize: "70px",
                                        color: isSelect[val]
                                            ? "#ffffff"
                                            : "#323232",
                                    }}
                                />
                            ) : val === "카페" ? (
                                <LocalCafeIcon
                                    style={{
                                        fontSize: "70px",
                                        color: isSelect[val]
                                            ? "#ffffff"
                                            : "#323232",
                                    }}
                                />
                            ) : (
                                <WineBarIcon
                                    style={{
                                        fontSize: "70px",
                                        color: isSelect[val]
                                            ? "#ffffff"
                                            : "#323232",
                                    }}
                                />
                            )}
                            <div
                                className="text-xl font-semibold leading-9 tracking-tight text-center"
                                style={{
                                    color: isSelect[val]
                                        ? "#ffffff"
                                        : "#323232",
                                }}
                            >
                                {val}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/main">
                <div
                    className="text-2xl font-semibold leading-9 tracking-tight text-center text-white bg-[#323232] w-20 h-14 flex justify-center items-center rounded-3xl cursor-pointer"
                    onClick={isScroll}
                >
                    선 택
                </div>
            </Link>
            <div
                className="absolute flex items-center justify-center p-1 bg-slate-100 cursor-pointer right-10 bottom-10 hover:bg-black hover:text-[#ffffff] rounded-full"
                style={{
                    transition: "background-color 0.7s ease-in-out",
                }}
                onClick={onClickTop}
            >
                <ArrowCircleUp
                    style={{
                        fontSize: "40px",
                    }}
                />
            </div>
        </div>
    );
}
