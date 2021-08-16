import React from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Slides from './Slides'
import '../../styles/Slider.css';

export const Slider = () => {
    return (
        <div id="slider" className="manualCarousel-container">
            <div className="manualCarousel-title">
                <h2>My Projects</h2>
            </div>
            
            <Carousel
                plugins={[
                    'arrows',
                    'infinite',
                    'centered',

                ]}
                // slidesPerPage={3}
                animationSpeed={100}
                // offset={50}
                // itemWidth={400}
                slides={Slides}
                // breakpoints={{
                //     960: {
                //         slidesPerpage: 1,
                //         arrows: false,
                //         // itemWidth: 250,
                //     },
                // }}
                /> 
        </div>
    )
}
