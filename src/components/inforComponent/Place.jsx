import { useStore } from "zustand";
import storePlaceTag from "../../clients/PlaceTagInfor";
import MapComponent from "./MapComponent";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PlaceTag from "./PlaceTag";
import { animateScroll } from "react-scroll";
import storeInforScroll from "../../clients/InforScroll";

export default function Place() {
    const { name } = useStore(storePlaceTag);
    const { isScroll } = useStore(storeInforScroll);
    const optionsBottom = {
        duration: 2000,
        smooth: true,
    };

    const onClickBottom = () => {
        animateScroll.scrollToBottom(optionsBottom);
        isScroll();
    };

    return (
        <div className="flex flex-col items-center w-dvw h-dvh">
            <div className="flex items-center gap-4 mt-20">
                <div className="text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
                    커플 데이트 장소는?
                </div>
                <div
                    className="flex items-center p-[3px] pr-2 bg-[#323232] rounded-md cursor-pointer"
                    onClick={onClickBottom}
                >
                    <PlaceOutlinedIcon className="text-white" />
                    <div className="font-semibold leading-9 tracking-tight text-center text-white">
                        {name}
                    </div>
                </div>
            </div>
            <div className="w-[80%] h-[75%] mt-8 border-[1px] border-[#c6c6c6] flex flex-col items-center">
                <PlaceTag />
                <MapComponent />
            </div>
        </div>
    );
}
