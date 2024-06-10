import { useEffect, useRef } from "react";
import { useStore } from "zustand";
import storeListSelect from "../../clients/ListSelect";
import cafeMarker from "../../imgs/Component 328.png";
import restaurantMarker from "../../imgs/Component 128.png";
import barMarker from "../../imgs/Component 218.png";
import barPMarker from "../../imgs/Component 53.png";
import restaurantPMarker from "../../imgs/Component 54.png";
import cafePMarker from "../../imgs/Component 55.png";
import storeCategory from "../../clients/CategoryState";
import storeChooseFocus from "../../clients/ChooseFocus";
import storeFinalSelect from "../../clients/FinalSelect";
import storePlaceTag from "../../clients/PlaceTagInfor";

const { kakao } = window;

export default function FinalMap() {
    const mapRef = useRef(null);
    const {
        restaurantArrays,
        cafeArrays,
        barArrays,
        restaurantList,
        cafeList,
        barList,
    } = useStore(storeListSelect);
    const { isSelect } = useStore(storeCategory);
    const { focus } = useStore(storeChooseFocus);
    const { name, places } = useStore(storePlaceTag);
    const { finalRestaurant, finalCafe, finalBar } = useStore(storeFinalSelect);

    useEffect(() => {
        let place = places[name];
        const container = mapRef.current;
        const options = {
            center: new kakao.maps.LatLng(place.lat, place.lng),
            level: 6,
        };
        const map = new kakao.maps.Map(container, options);
        let markerGroup = [];

        Object.keys(isSelect).map((val) =>
            isSelect[val]
                ? val === "식당" && focus === val
                    ? restaurantList.forEach((name) => {
                          const restaurant = restaurantArrays.find(
                              (item) => item.name === name
                          );
                          if (restaurant && name !== finalRestaurant) {
                              const { lat, lng } = restaurant;
                              const position = new kakao.maps.LatLng(lat, lng);
                              const markerImage = new kakao.maps.MarkerImage(
                                  restaurantMarker,
                                  new kakao.maps.Size(32, 42)
                              );

                              const marker = new kakao.maps.Marker({
                                  position,
                                  title: name,
                                  image: markerImage,
                              });

                              markerGroup.push(marker);
                          }
                      })
                    : val === "카페" && focus === val
                    ? cafeList.forEach((name) => {
                          const cafe = cafeArrays.find(
                              (item) => item.name === name
                          );
                          if (cafe && name !== finalCafe) {
                              const { lat, lng } = cafe;
                              const position = new kakao.maps.LatLng(lat, lng);
                              const markerImage = new kakao.maps.MarkerImage(
                                  cafeMarker,
                                  new kakao.maps.Size(32, 42)
                              );

                              const marker = new kakao.maps.Marker({
                                  position,
                                  title: name,
                                  image: markerImage,
                              });

                              markerGroup.push(marker);
                          }
                      })
                    : val === "술집" && focus === val
                    ? barList.forEach((name) => {
                          const bar = barArrays.find(
                              (item) => item.name === name
                          );
                          if (bar && name !== finalBar) {
                              const { lat, lng } = bar;
                              const position = new kakao.maps.LatLng(lat, lng);
                              const markerImage = new kakao.maps.MarkerImage(
                                  barMarker,
                                  new kakao.maps.Size(32, 42)
                              );

                              const marker = new kakao.maps.Marker({
                                  position,
                                  title: name,
                                  image: markerImage,
                              });

                              markerGroup.push(marker);
                          }
                      })
                    : null
                : null
        );
        if (finalRestaurant) {
            const restaurant = restaurantArrays.find(
                (item) => item.name === finalRestaurant
            );
            const { lat, lng } = restaurant;
            const position = new kakao.maps.LatLng(lat, lng);
            const markerImage = new kakao.maps.MarkerImage(
                restaurantPMarker,
                new kakao.maps.Size(32, 42)
            );
            const marker = new kakao.maps.Marker({
                position,
                title: finalRestaurant,
                image: markerImage,
            });
            markerGroup.push(marker);
        }

        if (finalCafe) {
            const cafe = cafeArrays.find((item) => item.name === finalCafe);
            const { lat, lng } = cafe;
            const position = new kakao.maps.LatLng(lat, lng);
            const markerImage = new kakao.maps.MarkerImage(
                cafePMarker,
                new kakao.maps.Size(32, 42)
            );
            const marker = new kakao.maps.Marker({
                position,
                title: finalCafe,
                image: markerImage,
            });
            markerGroup.push(marker);
        }

        if (finalBar) {
            const bar = barArrays.find((item) => item.name === finalBar);
            console.log(bar);
            const { lat, lng } = bar;
            const position = new kakao.maps.LatLng(lat, lng);
            const markerImage = new kakao.maps.MarkerImage(
                barPMarker,
                new kakao.maps.Size(32, 42)
            );
            const marker = new kakao.maps.Marker({
                position,
                title: finalBar,
                image: markerImage,
            });

            markerGroup.push(marker);
        }

        // 마커 그룹에 있는 모든 마커를 지도에 표시
        markerGroup.forEach((marker) => {
            marker.setMap(map);
        });
    }, [focus, finalBar, finalCafe, finalRestaurant]);

    return (
        <div className="w-[72%] h-full border-l-[1px] border-l-[#e2e2e2] py-4 ml-10 pr-24 bg-[#f3f3f3] flex justify-end items-center">
            <div className="w-[95%] h-full rounded-2xl" ref={mapRef}></div>
        </div>
    );
}
