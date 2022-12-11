import React from 'react';
import { ReactNode } from 'react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperProps } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import './slider.styles.css';

interface SliderProps {
    settings: SwiperProps
    children: ReactNode
}

function Slider({ settings, children }: SliderProps) {

    return <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>{children}</Swiper>;
}

export default Slider;