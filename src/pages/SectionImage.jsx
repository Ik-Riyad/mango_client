import React from "react";
import img1 from "../assets/home_banner1.webp";
import img2 from "../assets/home_banner3.webp";
import img3 from "../assets/home_banner4.png";
import img4 from "../assets/Rob.jpg.webp";

const SectionImage = () => {
    return (
        <div className="lg:h-[calc(100vh-300px)] mb-30 mt-20 mx-20 lg:mx-0">
            
            <div className="grid lg:grid-cols-4 lg:grid-rows-2 h-full">
                <img
                    className="w-full h-full row-span-2 lg:col-span-2"
                    src={img1}
                    alt=""
                />
                <img className="w-full h-full lg:col-span-2" src={img4} alt="" />
                <img className="w-full h-full" src={img2} alt="" />
                <img className="w-full h-full" src={img3} alt="" />
            </div>
        </div>
    );
};

export default SectionImage;
