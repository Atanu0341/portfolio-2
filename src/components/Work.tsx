import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { experiencesData } from '../lib/data'
import { useTheme } from '../context/ThemeContextProvider';
import { useInView } from 'react-intersection-observer';

export default function Work() {

    const { theme } = useTheme();

    // Move useInView outside of the map function
    const { ref: inViewRef, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <VerticalTimeline lineColor="">
            {experiencesData.map((item, index) => (
                <div key={index} ref={inViewRef} className="vertical-timeline-element">
                    <VerticalTimelineElement
                        contentStyle={{
                            background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                            boxShadow: 'none',
                            border: '1px solid rgba(0, 0, 0, 0.05)',
                            textAlign: 'left',
                            padding: '1.3rem 2rem',
                        }}
                        contentArrowStyle={{
                            borderRight: theme === "light"
                                ? "0.4rem solid #9ca3af"
                                : "0.4rem solid rgba(255, 255, 255, 0.5)",
                        }}
                        visible={inView}
                        date={item.date}
                        icon={item.icon}
                        iconStyle={{
                            background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                            fontSize: '1.5rem',
                        }}
                    >
                        <h3 className="font-semibold capitalize">{item.title}</h3>
                        <p className="!mt-0 font-normal">{item.location}</p>
                        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p>
                    </VerticalTimelineElement>
                </div>
            ))}
        </VerticalTimeline>
    )
}
