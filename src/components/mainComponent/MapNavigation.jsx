import { useEffect, useRef } from "react";
import { useStore } from "zustand";
// import storePlaceTag from "../../clients/PlaceTagInfor";
import { useParams } from "react-router-dom";
import storeCategoryFocus from "../../clients/CategoryFocus";
import storeListSelect from "../../clients/ListSelect";
import barMarker from "../../imgs/Component 218.png";
import restaurantMarker from "../../imgs/Component 128.png";
import cafeMarker from "../../imgs/Component 328.png";
import storePlaceTag from "../../clients/PlaceTagInfor";

const { kakao } = window;

export default function MapNavigation() {
    const mapRef = useRef(null);
    const { name, places } = useStore(storePlaceTag);
    const { focus } = useStore(storeCategoryFocus);
    const { restaurantArrays, cafeArrays, barArrays } =
        useStore(storeListSelect);
    const { id } = useParams();

    useEffect(() => {
        let place =
            focus === "식당" && id !== undefined
                ? restaurantArrays.find((items) => items.id === Number(id))
                : focus === "카페" && id !== undefined
                ? cafeArrays.find((items) => items.id === Number(id))
                : focus === "술집" && id !== undefined
                ? barArrays.find((items) => items.id === Number(id))
                : places[name];

        const container = mapRef.current;
        const options = {
            center: new kakao.maps.LatLng(place.lat, place.lng),
            level: 5,
        };
        // eslint-disable-next-line no-unused-vars
        const map = new kakao.maps.Map(container, options);

        if (focus === "식당" && id !== undefined) {
            const position = new kakao.maps.LatLng(place.lat, place.lng);
            const markerImage = new kakao.maps.MarkerImage(
                restaurantMarker,
                new kakao.maps.Size(32, 42)
            );
            const marker = new kakao.maps.Marker({
                position: position,
                image: markerImage,
            });
            marker.setMap(map);
        } else if (focus === "카페" && id !== undefined) {
            const position = new kakao.maps.LatLng(place.lat, place.lng);
            const markerImage = new kakao.maps.MarkerImage(
                cafeMarker,
                new kakao.maps.Size(32, 42)
            );
            const marker = new kakao.maps.Marker({
                position: position,
                image: markerImage,
            });
            marker.setMap(map);
        } else if (focus === "술집" && id !== undefined) {
            const position = new kakao.maps.LatLng(place.lat, place.lng);
            const markerImage = new kakao.maps.MarkerImage(
                barMarker,
                new kakao.maps.Size(32, 42)
            );
            const marker = new kakao.maps.Marker({
                position: position,
                image: markerImage,
            });
            marker.setMap(map);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
    return <div className="w-full h-full rounded-2xl" ref={mapRef}></div>;
}
