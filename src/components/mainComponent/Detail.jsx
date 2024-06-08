import DetailInfor from "./DetailInfor";
import DetailMenu from "./DetailMenu";
import Detailheader from "./Detailheader";
import { SectionsContainer, Section } from "react-fullpage";
import style from "../../styles/Section.module.css";
// import { useParams } from "react-router-dom";
// import { getRestaurantDetail } from "../../apis/getRestaurantDetail";
// import { useStore } from "zustand";
// import storeDetailInfor from "../../clients/DetailInfor";
// import DetailReview from "./DetailReview";

let options = {
    anchors: ["Infor", "Menu", "Review"],
    navigation: false,
};

export default function Detail() {
    return (
        <div className="flex flex-col w-[72%] py-4 overflow-hidden xl:pr-32 border-l-[1px] border-l-[#e2e2e2] pl-10 bg-[#f3f3f3]">
            <div className="w-full flex justify-between items-center sticky top-0 z-[2] bg-white rounded-2xl p-4 shadow">
                <Detailheader />
            </div>
            {/* <div className="flex flex-wrap items-center w-full h-full gap-5"></div> */}

            <SectionsContainer {...options} className={style.sectionsContainer}>
                <Section>
                    <DetailInfor />
                </Section>
                <Section>
                    <DetailMenu />
                </Section>
                {/* <Section>
                    <DetailReview />
                </Section> */}
            </SectionsContainer>
        </div>
    );
}

// 레스토랑 관련 정보는 server State니깐 react query로 관리합시다.
// vite 써야하나? webpack 쓰지말고?
