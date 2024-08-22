import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-creative';

export default function CarrouselBarbers() {
    function card() {
        return (
            <div className="text-center ">
                    <img className='col-sm-12 col rounded' src="/MB2.JPG" alt="" />
                    <h5 className="card-title text-white"></h5>
                    <p className="card-text text-white"></p>
            </div>
        )
    }
    return (
        <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
                prev: {
                    translate: ['-200%', 0, -500],
                },
                next: {
                    translate: ['200%', 0, -500],
                },
            }}
            centeredSlides={true}
            modules={[Navigation, Pagination, EffectCreative]}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
                640: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 3
                }
            }}
            className="mySwiper2 mt-5 pt-5"
        >
            <SwiperSlide>{card()}</SwiperSlide>
            <SwiperSlide>{card()} </SwiperSlide>
            <SwiperSlide>{card()} </SwiperSlide>
            <SwiperSlide>{card()} </SwiperSlide>
            <SwiperSlide>{card()} </SwiperSlide>
            <SwiperSlide>{card()} </SwiperSlide>
            <SwiperSlide>{card()} </SwiperSlide>

        </Swiper>
    )
}