import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { animateScroll } from "react-scroll";
import { useStore } from "zustand";
import storeInforScroll from "../../clients/InforScroll";

export default function InforCircleScroll() {
    const { scroll, isScroll } = useStore(storeInforScroll);
    const optionsTop = {
        duration: 1500,
        smooth: true,
    };
    const optionsBottom = {
        duration: 2000,
        smooth: true,
    };

    const onClickTop = () => {
        animateScroll.scrollToTop(optionsTop);
        isScroll();
    };
    const onClickBottom = () => {
        animateScroll.scrollToBottom(optionsBottom);
        isScroll();
    };

    return scroll ? (
        <>
            <CircleOutlinedIcon
                className="fixed top-[45%] right-10 cursor-pointer z-10"
                onClick={onClickTop}
            />
            <CircleIcon className="fixed top-[55%] right-10 cursor-pointer z-10" />
        </>
    ) : (
        <>
            <CircleIcon className="fixed top-[45%] right-10 cursor-pointer z-10" />
            <CircleOutlinedIcon
                className="fixed top-[55%] right-10 cursor-pointer z-10"
                onClick={onClickBottom}
            />
        </>
    );
}
