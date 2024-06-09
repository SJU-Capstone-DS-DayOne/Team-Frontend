import { useEffect, useState } from "react";
import { getMainRestaurant } from "../../apis/getMainRestaurant";

// const recommendList = [
//     { id: 1, imageUrl: img1, name: "정면", menuName: "백면" },
//     { id: 2, imageUrl: img1, name: "정면", menuName: "백면" },
//     { id: 3, imageUrl: img1, name: "정면", menuName: "백면" },
//     { id: 4, imageUrl: img1, name: "정면", menuName: "백면" },
//     { id: 5, imageUrl: img1, name: "정면", menuName: "백면" },
// ];

export default function LandingRecommend() {
    const [recommendList, setRecommendList] = useState([]);
    useEffect(() => {
        const fetchdate = async () => {
            const result = await getMainRestaurant();

            setRecommendList(result);
        };
        fetchdate();
    }, []);
    return (
        <div className="flex max-w-full max-h-full gap-4 overflow-auto">
            {recommendList.map((val, idx) => (
                <div className="flex flex-col items-start" key={idx}>
                    <div className="w-[220px] min-h-[220px] overflow-hidden rounded-[24px]">
                        <img
                            src={val.rankedMenuResponse.imageUrl}
                            alt={val.id}
                            className="object-cover object-center w-full h-full"
                        />
                    </div>
                    <div className="text-[#323232] font-[Pretendard-Bold] text-lg mt-3">
                        {val.name}
                    </div>
                    <div className="text-[#c1c1c1]">
                        {val.rankedMenuResponse.name}
                    </div>
                </div>
            ))}
        </div>
    );
}
