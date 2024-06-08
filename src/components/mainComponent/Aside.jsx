import { Link } from "react-router-dom";
import MapNavigation from "./MapNavigation";
import SelectCategory from "./SelectCategory";

export default function Aside() {
    return (
        <div className="z-20 flex flex-col justify-between w-[28%] h-full py-4 mr-10">
            <div className="w-[calc(25dvw-10px)] h-[calc(25dvw-10px)]">
                <MapNavigation />
            </div>

            <SelectCategory />

            <Link to="/react-actions/final" className="flex justify-end">
                <div className="w-full bg-[#6e3bff] text-center text-white px-4 py-2.5 rounded-xl font-[Pretendard-SemiBold]">
                    선택 완료
                </div>
            </Link>
        </div>
    );
}
