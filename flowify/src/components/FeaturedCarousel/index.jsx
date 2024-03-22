import React from "react";
import { Carousel } from 'flowbite-react';
import Image1 from "../../assets/Carousel1.png";
import Image2 from "../../assets/Carousel2.png";
import image3 from "../../assets/Carousel3.webp";
import image4 from "../../assets/Carousel4.png";
import image5 from "../../assets/Carousel5.jpeg";

const FeaturedCarousel = () => {
    return (
        <div className="py-14 flex">
            <div className="w-1/3 text-center p-4" style={{ margin: '80px' }}>
                <h1 className="text-5xl text-second-color font-bold">Flowify detail about the app</h1>
                <br />
                <p className="text-second-color">Flowify is a cutting-edge productivity application designed to streamline your workflow and enhance your efficiency. With its intuitive interface and robust features, Flowify empowers users to manage tasks, projects, and collaborations seamlessly.</p>
            </div>
            <div className="w-2/3">
                <Carousel>
                    <img src={Image1} alt="1"/>
                    <img src={Image2} alt="2"/>
                    <img src={image3} alt="3"/>
                    <img src={image4} alt="4"/>
                    <img src={image5} alt="5"/>
                </Carousel>
            </div>
        </div>
    );
};

export default FeaturedCarousel;
