// export default function CardReserve() {
//     return (
//         <>
//             <div
//                 className="absolute text-lg font-semibold duration-1000 bottom-[30%] left-4"
//                 style={{
//                     opacity: !isHover ? "0" : "1",
//                 }}
//             >
//                 리뷰 요약
//             </div>
//             <div
//                 className="relative text-lg font-semibold text-white duration-1000 left-6 top-[75%]"
//                 style={{
//                     opacity: !isHover ? "0" : "1",
//                 }}
//             >
//                 <Face3 />
//                 <div
//                     className="absolute w-3/5 text-sm font-semibold text-white duration-1000 top-1 left-10"
//                     style={{
//                         opacity: !isHover ? "0" : "1",
//                     }}
//                 >
//                     {prop.prop.reviewSummerize}
//                 </div>
//             </div>

//             <div
//                 className="w-4/5 h-4/5 rounded-2xl flex flex-col cursor-pointer absolute top-16 left-8 z-[2] transition-transform duration-1000 bg-image1 bg"
//                 style={{
//                     transform: isHover ? "rotateY(180deg)" : "rotateY(0deg)",
//                     backfaceVisibility: "hidden",
//                     backgroundColor: "#ffffff",
//                     boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//                     objectFit: "cover",
//                     objectPosition: "center",
//                 }}
//             >
//                 <div className="w-full h-[60px] flex items-center justify-between pl-2 pr-[14px] rounded-t-3xl">
//                     <MaleIcon style={{ fontSize: "50px", color: "#233468" }} />
//                     <div className="text-[#233468] font-bold text-xl">정면</div>
//                 </div>
//                 <div className="flex flex-col items-center justify-around gap-1 mt-2">
//                     <div className="flex items-center justify-around w-full">
//                         <div className="flex flex-col items-center gap-1">
//                             <div className="text-[#233468] font-bold">홍면</div>
//                         </div>
//                         <div className="text-[#233468] font-semibold">
//                             9000원
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-around w-full">
//                         <div className="flex flex-col items-center gap-1">
//                             <div className="text-[#233468] font-bold">백면</div>
//                         </div>
//                         <div className="text-[#233468] font-semibold">
//                             9000원
//                         </div>
//                     </div>
//                 </div>

//                 <div className="h-[40px] w-full flex justify-around items-center">
//                     <div className="text-white bg-[#233468] w-[25%] h-[60%] flex justify-center items-center font-bold text-[12px] rounded-lg">
//                         #연인
//                     </div>
//                     <div className="text-white bg-[#233468] w-[25%] h-[60%] flex justify-center items-center font-bold text-[12px] rounded-lg">
//                         #분위기
//                     </div>
//                     <div className="text-white bg-[#233468] w-[25%] h-[60%] flex justify-center items-center font-bold text-[12px] rounded-lg">
//                         #멋진
//                     </div>
//                 </div>

//                 <div className></div>
//             </div>

//             <div
//                 className="w-4/5 border-[3px] h-4/5 rounded-xl border-[#363636] flex flex-col cursor-pointer absolute top-12 left-8 z-[1] transition-transform duration-1000"
//                 style={{
//                     transform: !isHover ? "rotateY(180deg)" : "rotateY(0deg)",
//                     backfaceVisibility: "hidden",
//                     backgroundColor:
//                         prop.index === 1
//                             ? "#c2c2c2"
//                             : prop.index === 2
//                             ? "#ff7f00"
//                             : null,
//                 }}
//             >
//                 <div className="w-full h-[60px] flex items-center justify-between pl-2 pr-[14px] rounded-t-3xl">
//                     <MaleIcon
//                         style={{
//                             fontSize: "50px",
//                             color: "#233468",
//                         }}
//                     />
//                     <div className="text-[#233468] font-bold text-xl">정면</div>
//                 </div>
//                 <div className="flex-1 border-t-[3px] border-[#363636] flex justify-center items-center">
//                     <MapNavigation />
//                 </div>
//                 <div className="flex-1 border-t-[3px] border-[#363636] flex flex-col justify-center items-center gap-3">
//                     <div className="flex items-center justify-around w-full">
//                         <div className="flex flex-col items-center justify-center ">
//                             <Face />
//                             <div className="text-xs text-[#233468] font-medium">
//                                 userID
//                             </div>
//                         </div>
//                         <div className="">리뷰내용</div>
//                     </div>
//                     <div className="flex items-center justify-around w-full">
//                         <div className="flex flex-col items-center justify-center ">
//                             <Face2 />
//                             <div className="text-xs text-[#233468] font-medium">
//                                 userID
//                             </div>
//                         </div>
//                         <div className="">리뷰내용</div>
//                     </div>
//                     <div className="flex items-center justify-around w-full">
//                         <div className="flex flex-col items-center justify-center ">
//                             <Face3 />
//                             <div className="text-xs text-[#233468] font-medium">
//                                 userID
//                             </div>
//                         </div>
//                         <div className="">리뷰내용</div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
