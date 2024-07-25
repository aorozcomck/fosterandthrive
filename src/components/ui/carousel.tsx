import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

interface CarouselProps {
    Images: string[];
}

const Carousel = (props: CarouselProps) => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-full relative">
                <div className="bg-gradient absolute"></div>
                <div className="absloute w-full overflow-hidden after:clear-both after:block after:content-['']">
                    <div className="flex flex-row">
                        <Swiper
                            centeredSlides={true}
                            speed={5000}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                                stopOnLastSlide: false,
                            }}
                            loop={false}
                            pagination={{
                                clickable: true,
                            }}
                            effect="fade"
                            className="mySwiper"
                        >
                            {props.Images.map((image, index) => (
                                <SwiperSlide
                                    key={index}
                                    className={`w-full mx-auto`}
                                >
                                    <div className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none max-h-[450px] lg:max-h-[800px] mobilelarge:max-h-full">
                                        <Image src={image} alt="" fill priority/>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;