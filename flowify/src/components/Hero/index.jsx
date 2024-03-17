import React from 'react';
import HeroImage from '../../assets/game.png';

const Hero = () => {
  return (
      <section className="bg-heroBackground-color dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                  <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-h1Text-color md:text-5xl lg:text-6xl font-dancing">Flowify</h1>
                      <p className="mb-8 text-lg font-normal text-pText-color lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Make your life flow with Flowify. Integrate all your calendars, scheduling, and task management into one dashboard.</p>
                      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-second-color hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                              OPEN MY FLOW BOARD
                              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                              </svg>
                          </a>
                          <a href="#" className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                              Learn more
                          </a>  
                      </div>
                  </div>
                  <div className="hidden md:block">
                      <img src={HeroImage} alt="Flowify Image" className="w-full h-auto" />
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Hero;