import { memo } from "react";
import CarCircle from "../../common/CarCircle/CarCircle";
import nissanGtrImg from "../../../assets/images/nissan_gtr.png";
import "./CarRevealView.scss";

const CarRevealView = memo(() => {
    return (
        <div className="car-reveal-container">
            <CarCircle
                imageSrc={nissanGtrImg}
                altText="Nissan GTR"
                theme="gtr"
                showRings={false}
            />
        </div>
    );
});

CarRevealView.displayName = "CarRevealView";

export default CarRevealView;

