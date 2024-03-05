'use client'

import React, { useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/src/lib/data';
import Project from './Project';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '../context/ActiveSectionContextProvider';

export default function Projects() {

    const { ref, inView } = useInView({ threshold: 0.5 })
    const { setActiveSection } = useActiveSectionContext()

    useEffect(() => {
        if (inView) {
            setActiveSection("Projects")
        }
    }, [inView, setActiveSection])

    return (
        <section ref={ref} id='projects' className='scroll-mt-28'>
            <SectionHeading>My projects</SectionHeading>

            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}


