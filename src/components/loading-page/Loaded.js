import React, { useEffect, useState } from 'react'
import { AboutEdu } from '../about/AboutEdu'
import { Cover } from '../cover/Cover'
import { Footer } from '../footer/Footer'
import { Info } from '../info/Info'
import { Navbar } from '../navbar/Navbar'
import { Slider } from '../slider/Slider'

export const Loaded = () => {

        // Screen State
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [scrollHeight]);

    return (
        <div>
                <Navbar isScrolling={scrollHeight} />
                <Cover />
                <AboutEdu />
                <Slider />
                <Info />
                <Footer />
        </div>
    )
}
