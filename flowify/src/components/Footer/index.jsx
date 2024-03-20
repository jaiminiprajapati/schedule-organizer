import React from "react";
import Logo from "../../assets/Flowify_Logo_1.png";

const Footer = () => {
    return (
        <footer className="bg-gray-100 rounded-lg shadow m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
            <a href="#" className="flex items-center mb-4 space-x-3 rtl:space-x-reverse">
                <img src={Logo} className="h-8" alt="Flowify" />
                <span className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-second-color md:text-5xl lg:text-6xl font-dancing">Flowify</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500">
                <li>
                    <a href="#" className="hover:underline me-4">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4">Terms of Service</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 text-center">© {new Date().getFullYear()} Flowify. All Rights Reserved.</span>
    </div>
</footer>
    );
}

export default Footer;