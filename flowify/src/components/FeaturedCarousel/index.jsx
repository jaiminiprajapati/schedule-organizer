import React from "react";
import Image1 from "../../assets/Carousel1.png";
import Image2 from "../../assets/carousel2.png";
import image3 from "../../assets/carousel3.webp";
import image4 from "../../assets/carousel4.png";
import image5 from "../../assets/carousel5.jpeg";

const FeaturedCarousel = () => {
    return (
        <div className="flex">
            {/* text*/}
            <div className="w-1/3 p-4">
                <h1 className="text-4xl font-bold" style={{ margin: '20px' }}>Flowify detaily about the app</h1>
                <p>Flowify is a cutting-edge productivity application designed to streamline your workflow and enhance your efficiency. With its intuitive interface and robust features, Flowify empowers users to manage tasks, projects, and collaborations seamlessly.</p>
            </div>
            {/* Carousel */}
            <div id="controls-carousel" className="relative w-2/3" data-carousel="static"style={{ margin: '20px' }}>
                {/* Carousel wrapper */}
                <div className="relative h-72 overflow-hidden rounded-lg md:h-90">
                     {/* Item 1 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={Image1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* Item 2 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src={Image2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* Item 3 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={image3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* Item 4 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={image4} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* Item 5 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={image5} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>
                {/* Slider controls */}
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default FeaturedCarousel;