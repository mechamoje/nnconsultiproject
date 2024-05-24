import React, { useEffect, useState } from 'react';
import SectionTitle from "../ui/sectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';
import { colors } from '../ui/theme';


export default function Parceiros() {

    const [delay, setDelay] = useState(1000);
    const [slidesPerView, setSlidesPerView] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesPerView(1);
                setDelay(5000)
            } else {
                setSlidesPerView(4);
                setDelay(1000)
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Section id='parceiros'>
            <SectionTitle title="Com quem trabalhamos" subtitle="Empresas parceiras inclusas em nosso portfólio" />
            <Swiper
                spaceBetween={15}
                slidesPerView={slidesPerView}
                autoplay={{
                    delay: delay,
                    disableOnInteraction: false
                }}
                direction={'horizontal'}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide>
                    <Image
                        src="/10.png"
                        width={280}
                        height={125}
                        alt="Picture of the author"
                    />
                </SwiperSlide>
                <SwiperSlide>  <Image
                    src="/16.png"
                    width={280}
                    height={125}
                    alt="Picture of the author"
                /></SwiperSlide>
                <SwiperSlide>  <Image
                    src="/5.png"
                    width={280}
                    height={125}
                    alt="Picture of the author"
                /></SwiperSlide>
                <SwiperSlide>  <Image
                    src="/17.png"
                    width={280}
                    height={125}
                    alt="Picture of the author"
                /></SwiperSlide>
                <SwiperSlide>  <Image
                    src="/2.png"
                    width={280}
                    height={125}
                    alt="Picture of the author"
                /></SwiperSlide>
                <SwiperSlide>  <Image
                    src="/4.png"
                    width={280}
                    height={125}
                    alt="Picture of the author"
                /></SwiperSlide>
                <SwiperSlide>  <Image
                    src="/12.png"
                    width={280}
                    height={125}
                    alt="Picture of the author"
                /></SwiperSlide>
                <SwiperSlide>  <Image
                    src="/8.png"
                    width={280}
                    height={125}
                    alt="Picture of the author"
                /></SwiperSlide>
                <SwiperSlide>  <Image
                    src="/3.png"
                    width={280}
                    height={125}
                    alt="Picture of the author"
                /></SwiperSlide>
                <SwiperSlide>  <Image
                    src="/1.png"
                    width={280}
                    height={125}
                    alt="Picture of the author"
                /></SwiperSlide>
                <SwiperSlide>  <Image
                    src="/6.png"
                    width={280}
                    height={125}
                    alt="Picture of the author"
                /></SwiperSlide>
                <SwiperSlide>  <Image
                    src="/13.png"
                    width={280}
                    height={125}
                    alt="Picture of the author"
                /></SwiperSlide>
                <SwiperSlide>  <Image
                    src="/9.png"
                    width={280}
                    height={125}
                    alt="Picture of the author"
                /></SwiperSlide>
                <SwiperSlide>  <Image
                    src="/7.png"
                    width={280}
                    height={125}
                    alt="Picture of the author"
                /></SwiperSlide>
                <SwiperSlide>  <Image
                    src="/15.png"
                    width={280}
                    height={125}
                    alt="Picture of the author"
                /></SwiperSlide>
                <SwiperSlide>  <Image
                    src="/14.png"
                    width={280}
                    height={125}
                    alt="Picture of the author"
                /></SwiperSlide>
                <SwiperSlide>  <Image
                    src="/11.png"
                    width={280}
                    height={125}
                    alt="Picture of the author"
                /></SwiperSlide>
            </Swiper>
        </Section>
    )
}

const Section = styled.section` 
    background-color: ${colors.white};
    padding-bottom: 30px;
    text-align: center;
`