import { useStore } from "zustand";
import storePlaceTag from "../../clients/PlaceTagInfor";

export default function PlaceTag() {
    const { names, onClick } = useStore(storePlaceTag);

    return (
        <div className="flex flex-wrap w-full h-28">
            {names.map((val, idx) => (
                <button
                    className="flex items-center justify-center bg-[#323232] rounded-2xl w-20"
                    key={idx}
                >
                    <div
                        className="font-semibold leading-9 tracking-tight text-center text-white"
                        onClick={onClick}
                    >
                        {val}
                    </div>
                </button>
            ))}
        </div>
    );
}
// names === "잠실, 광진, 홍대" ? cursor click true: false
