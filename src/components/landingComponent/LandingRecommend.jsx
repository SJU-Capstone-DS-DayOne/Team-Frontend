import img1 from "../../imgs/back.jpeg";

const recommendList = [
    { id: 1, imageUrl: img1, name: "정면", menuName: "백면" },
    { id: 2, imageUrl: img1, name: "정면", menuName: "백면" },
    { id: 3, imageUrl: img1, name: "정면", menuName: "백면" },
    { id: 4, imageUrl: img1, name: "정면", menuName: "백면" },
    { id: 5, imageUrl: img1, name: "정면", menuName: "백면" },
];

export default function LandingRecommend() {
    return (
        <div className="flex w-full h-full gap-4">
            {recommendList.map((val, idx) => (
                <div className="flex flex-col items-start" key={idx}>
                    <div className="w-[220px] h-[220px] overflow-hidden rounded-[24px]">
                        <img
                            src={val.imageUrl}
                            alt={val.id}
                            className="object-cover object-center w-full h-full"
                        />
                    </div>
                    <div className="text-[#323232] font-[Pretendard-Bold] text-lg mt-3">
                        {val.name}
                    </div>
                    <div className="text-[#c1c1c1]">{val.menuName}</div>
                </div>
            ))}
        </div>
    );
}
