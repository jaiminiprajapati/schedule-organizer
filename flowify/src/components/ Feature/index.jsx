import React from 'react';
import Calendar from '../Calendar';

const FeatureSection = () => {
    

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center">
                        <svg className="w-12 h-12 text-heroBackground-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <rect width="20" height="20" x="2" y="2" rx="10" className="stroke-current" stroke="none" fill="rgba(156, 163, 175, 0.5)"></rect>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12l4 4l8-8"></path>
                        </svg>
                        <h3 className="mt-4 text-lg font-bold text-gray-900">All your clanders</h3>
                        <p className="mt-2 text-center text-black-500">Bring your life together all in one dash board. If you have multiple Email addresses bring them together into one Schedule viewer. </p>
                    </div>
                    {/* Feature 2 */}
                    <div className="flex flex-col items-center">
                        <svg className="w-12 h-12 text-heroBackground-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <rect width="20" height="20" x="2" y="2" rx="10" className="stroke-current" stroke="none" fill="rgba(156, 163, 175, 0.5)"></rect>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12l4 4l8-8"></path>
                        </svg>
                        <h3 className="mt-4 text-lg font-bold text-gray-900">Family Flow</h3>
                        <p className="mt-2 text-base text-black-500">Track your family Schdeules all in one place</p>
                    </div>
                    {/* Feature 3 */}
                    <div className="flex flex-col items-center">
                        <svg className="w-12 h-12 text-heroBackground-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <circle cx="12" cy="12" r="10" className="stroke-current" fill="rgba(156, 163, 175, 0.5)"></circle>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m0 0l-3-3m3 3l3-3"></path>
                        </svg>
                        <h3 className="mt-4 text-lg text-gray-900 font-bold">Work flow</h3>
                        <p className="mt-2 text-base text-black-500">Never be miss aligned with your team again. When working on project you and your team link eahcorther work schedules so that you can  know schedules where and if they are avaibele.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-8">
            <button className="px-6 py-3 bg-second-color text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300">
                    Get Started
            </button>
            </div>
        </section>
    );
};

export default FeatureSection;