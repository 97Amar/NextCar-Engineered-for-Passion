import { useEffect, useState } from "react";

import audiR8Img from "../assets/images/audi_r8.png";
import darkAudiImg from "../assets/images/dark_audi.png";
import nissanGtrImg from "../assets/images/nissan_gtr.png";
import porsche911Img from "../assets/images/porsche_911.png";
import truckDeliveryImg from "../assets/images/truck_delivery_clean.png";

const IMAGE_SOURCES = [
    audiR8Img,
    darkAudiImg,
    nissanGtrImg,
    porsche911Img,
    truckDeliveryImg,
];

export const usePreloadImages = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const promises = IMAGE_SOURCES.map((src) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve(true);
                img.onerror = () => resolve(false);
            });
        });

        Promise.all(promises).then(() => {
            if (isMounted) {
                setImagesLoaded(true);
            }
        });

        return () => {
            isMounted = false;
        };
    }, []);

    return imagesLoaded;
};

export default usePreloadImages;
