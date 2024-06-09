import { useEffect, useRef } from "react";
import { useStore } from "zustand";
import storeFinalSelect from "../../clients/FinalSelect";
import storeListSelect from "../../clients/ListSelect";
import barPMarker from "../../imgs/Component 53.png";
import restaurantPMarker from "../../imgs/Component 54.png";
import cafePMarker from "../../imgs/Component 55.png";
import { getCarDirection } from "../../apis/getCarDirection";
import storeMinDuration from "../../clients/MinDuration";
import storeMinDistance from "../../clients/MinDistance";
import storePlaceTag from "../../clients/PlaceTagInfor";

const { kakao } = window;
export default function DateCourseMain() {
    const { finalRestaurant, finalCafe, finalBar } = useStore(storeFinalSelect);
    const { restaurantArrays, cafeArrays, barArrays } =
        useStore(storeListSelect);
    const { setDuration } = useStore(storeMinDuration);
    const { setDistance } = useStore(storeMinDistance);
    const { name, places } = useStore(storePlaceTag);
    const restaurantInfor = restaurantArrays.find(
        (item) => item.name === finalRestaurant
    );
    const cafeInfor = cafeArrays.find((item) => item.name === finalCafe);
    const barInfor = barArrays.find((item) => item.name === finalBar);

    const mapRef = useRef(null);
    useEffect(() => {
        async function initializeMap() {
            let place = places[name];
            const container = mapRef.current;
            const options = {
                center: new kakao.maps.LatLng(place.lat, place.lng),
                level: 6,
            };
            const map = new kakao.maps.Map(container, options);

            if (cafeInfor && barInfor) {
                const pointA = new kakao.maps.LatLng(
                    restaurantInfor.lat,
                    restaurantInfor.lng
                );

                const pointB = new kakao.maps.LatLng(
                    cafeInfor.lat,
                    cafeInfor.lng
                );

                const pointC = new kakao.maps.LatLng(
                    barInfor.lat,
                    barInfor.lng
                );

                const markerA = new kakao.maps.Marker({
                    position: pointA,
                    image: new kakao.maps.MarkerImage(
                        restaurantPMarker,
                        new kakao.maps.Size(32, 42)
                    ),
                });

                const markerB = new kakao.maps.Marker({
                    position: pointB,
                    image: new kakao.maps.MarkerImage(
                        cafePMarker,
                        new kakao.maps.Size(32, 42)
                    ),
                });

                const markerC = new kakao.maps.Marker({
                    position: pointC,
                    image: new kakao.maps.MarkerImage(
                        barPMarker,
                        new kakao.maps.Size(32, 42)
                    ),
                });

                markerA.setMap(map);
                markerB.setMap(map);
                markerC.setMap(map);

                // Directions API 호출
                const directionData = await getCarDirection(
                    restaurantInfor.lat,
                    restaurantInfor.lng,
                    cafeInfor.lat,
                    cafeInfor.lng,
                    barInfor.lat,
                    barInfor.lng
                );

                if (directionData) {
                    const linePath = [];
                    directionData.routes[0].sections.forEach((section) => {
                        section.roads.forEach((road) => {
                            for (let i = 0; i < road.vertexes.length; i += 2) {
                                const lat = road.vertexes[i + 1];
                                const lng = road.vertexes[i];
                                linePath.push(new kakao.maps.LatLng(lat, lng));
                            }
                        });
                    });

                    const polyline = new kakao.maps.Polyline({
                        path: linePath,
                        strokeWeight: 5,
                        strokeColor: "#6E3Bff",
                        strokeOpacity: 1,
                        strokeStyle: "solid",
                    });

                    polyline.setMap(map);

                    setDuration(directionData.routes[0].summary.duration);
                    setDistance(directionData.routes[0].summary.distance);
                }
            } else if (cafeInfor && !barInfor) {
                const pointA = new kakao.maps.LatLng(
                    restaurantInfor.lat,
                    restaurantInfor.lng
                );

                const pointB = new kakao.maps.LatLng(
                    cafeInfor.lat,
                    cafeInfor.lng
                );

                const markerA = new kakao.maps.Marker({
                    position: pointA,
                    image: new kakao.maps.MarkerImage(
                        restaurantPMarker,
                        new kakao.maps.Size(32, 42)
                    ),
                });

                const markerB = new kakao.maps.Marker({
                    position: pointB,
                    image: new kakao.maps.MarkerImage(
                        cafePMarker,
                        new kakao.maps.Size(32, 42)
                    ),
                });

                markerA.setMap(map);
                markerB.setMap(map);

                // Directions API 호출
                const directionData = await getCarDirection(
                    restaurantInfor.lat,
                    restaurantInfor.lng,
                    cafeInfor.lat,
                    cafeInfor.lng
                );

                if (directionData) {
                    const linePath = [];
                    directionData.routes[0].sections.forEach((section) => {
                        section.roads.forEach((road) => {
                            for (let i = 0; i < road.vertexes.length; i += 2) {
                                const lat = road.vertexes[i + 1];
                                const lng = road.vertexes[i];
                                linePath.push(new kakao.maps.LatLng(lat, lng));
                            }
                        });
                    });

                    const polyline = new kakao.maps.Polyline({
                        path: linePath,
                        strokeWeight: 5,
                        strokeColor: "#6E3Bff",
                        strokeOpacity: 1,
                        strokeStyle: "solid",
                    });

                    polyline.setMap(map);

                    setDuration(directionData.routes[0].summary.duration);
                    setDistance(directionData.routes[0].summary.distance);
                }
            } else if (!cafeInfor && barInfor) {
                const pointA = new kakao.maps.LatLng(
                    restaurantInfor.lat,
                    restaurantInfor.lng
                );

                const pointB = new kakao.maps.LatLng(
                    barInfor.lat,
                    barInfor.lng
                );

                const markerA = new kakao.maps.Marker({
                    position: pointA,
                    image: new kakao.maps.MarkerImage(
                        restaurantPMarker,
                        new kakao.maps.Size(32, 42)
                    ),
                });

                const markerB = new kakao.maps.Marker({
                    position: pointB,
                    image: new kakao.maps.MarkerImage(
                        cafePMarker,
                        new kakao.maps.Size(32, 42)
                    ),
                });

                markerA.setMap(map);
                markerB.setMap(map);

                // Directions API 호출
                const directionData = await getCarDirection(
                    restaurantInfor.lat,
                    restaurantInfor.lng,
                    barInfor.lat,
                    barInfor.lng
                );

                if (directionData) {
                    const linePath = [];
                    directionData.routes[0].sections.forEach((section) => {
                        section.roads.forEach((road) => {
                            for (let i = 0; i < road.vertexes.length; i += 2) {
                                const lat = road.vertexes[i + 1];
                                const lng = road.vertexes[i];
                                linePath.push(new kakao.maps.LatLng(lat, lng));
                            }
                        });
                    });

                    const polyline = new kakao.maps.Polyline({
                        path: linePath,
                        strokeWeight: 5,
                        strokeColor: "#6E3Bff",
                        strokeOpacity: 1,
                        strokeStyle: "solid",
                    });

                    polyline.setMap(map);
                    setDuration(directionData.routes[0].summary.duration);
                    setDistance(directionData.routes[0].summary.distance);
                }
            }
        }

        initializeMap();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="w-[72%] h-full border-l-[1px] border-l-[#e2e2e2] py-4 ml-10 pr-24 bg-[#f3f3f3] flex justify-end items-center">
            <div className="w-[95%] h-full rounded-2xl" ref={mapRef}></div>
        </div>
    );
}
