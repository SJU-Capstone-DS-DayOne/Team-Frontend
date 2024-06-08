import { useStore } from "zustand";
import storeScroll from "../../clients/InitialScroll";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

export default function CircleScroll() {
    const { scrollToTarget } = useStore(storeScroll);

    return scrollToTarget ? (
        <>
            <CircleOutlinedIcon
                className="fixed top-[45%] right-10"
                style={{ fontSize: "20px" }}
            />
            <CircleIcon
                className="fixed top-[55%] right-10"
                style={{ fontSize: "20px" }}
            />
        </>
    ) : (
        <>
            <CircleIcon
                className="fixed top-[45%] right-10"
                style={{ fontSize: "20px" }}
            />
            <CircleOutlinedIcon
                className="fixed top-[55%] right-10"
                style={{ fontSize: "20px" }}
            />
        </>
    );
}
