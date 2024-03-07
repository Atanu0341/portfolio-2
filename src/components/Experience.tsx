"use client"

import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from '../lib/hooks';
import Work from './Work';
import Schooling from './Schooling';

export default function Experience() {
    const { ref } = useSectionInView("Experience");
    const [selectedCategory, setSelectedCategory] = useState('education');

    return (
        <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>My experience</SectionHeading>
            <div className="flex justify-center m-auto flex:col md:flex-row gap-2 py-4 w-max">
                <button
                    onClick={() => setSelectedCategory('education')}
                    className={`category-button ${selectedCategory === 'education' && 'active'} text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 cursor-pointer font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 focus:scale-110 hover:scale-110 active:scale-105 transition `}
                >
                    Education
                </button>
                <button
                    onClick={() => setSelectedCategory('work')}
                    className={`category-button ${selectedCategory === 'work' && 'active'} text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 cursor-pointer font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 focus:scale-110 hover:scale-110 active:scale-105 transition `}
                >
                    Work
                </button>
            </div>
            {selectedCategory === 'education' ? <Schooling /> : <Work />}
        </section>
    );
}
