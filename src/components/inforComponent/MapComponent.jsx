import { useEffect, useRef } from "react";
import { useStore } from "zustand";
import storePlaceTag from "../../clients/PlaceTagInfor";

const { kakao } = window;

export default function MapComponent() {
    const mapRef = useRef(null);
    const { name, places } = useStore(storePlaceTag);

    useEffect(() => {
        const container = mapRef.current;
        const options = {
            center: new kakao.maps.LatLng(places[name].lat, places[name].lng),
            level: 4,
        };
        // eslint-disable-next-line no-unused-vars
        const map = new kakao.maps.Map(container, options);

        var markerPosition = new kakao.maps.LatLng(
            places[name].lat,
            places[name].lng
        );

        var marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        marker.setMap(map);

        map.setDraggable(false);
        map.setZoomable(false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    return <div className="w-full h-full" ref={mapRef}></div>;
}
