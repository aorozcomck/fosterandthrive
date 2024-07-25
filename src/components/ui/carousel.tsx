import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/parallax";

interface CarouselImageProps {
    url: string;
    title: string | undefined;
    backgrounColor: string | undefined;
    description: string | undefined;
}

interface CarouselProps {
    Images: CarouselImageProps[];
}

const Carousel = (props: CarouselProps) => {

    return (
        <div className="flex">
                    <Swiper
                        centeredSlides={true}
                        speed={10000}
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: false,
                            stopOnLastSlide: true,
                        }}
                        loop={false}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        effect="fade"
                        className="relative"
                    >
                        {props.Images.map((imageprop, index) => (
                            <SwiperSlide
                                key={index}
                                className={`w-full`}>
                                <div className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none max-h-[450px] lg:max-h-[800px] mobilelarge:max-h-full">
                                <Image 
                                            src={imageprop.url} 
                                            alt="" 
                                            className='object-none object-bottom w-full !h-full' 
                                            layout="responsive" 
                                            width={100} 
                                            height={100} 
                                            priority 
                                />

                                </div>
                                {imageprop.title && (
                                    <>
                                         <div className="hidden lg:block absolute bottom-16 min-h-56 w-3/4 bg-gradient-to-r from-[rgba(58,62,65,0.87)] via-[rgba(58,62,65,0.47)] to-[rgba(58,62,65,0)]">
                                            <div className={`lg:w-487 w-full`}>
                                                <h2 className="text-gtl-med font-bold text-4xl mobile:text-2xl lg:mb-3 max-w-343 mobilelarge:max-w-unset mobilelarge:mb-2.5 mobile:font-normal">{imageprop?.title}</h2>
                                                {imageprop?.description && (
                                                    <p className="text-sofia-reg lg:text-20 text-lg lg:mb-3 max-w-343 mobilelarge:max-w-unset pb-4 lg:pb-0"
                                                        dangerouslySetInnerHTML={{ __html: imageprop?.description || '' }}
                                                    ></p>
                                                )}
                                            </div>
                                        </div >
                                         <div className="bg-[#525658] absolute bottom-0 min-h-56 w-full p-6 lg:hidden ">
                                            <div className={`lg:w-487 w-full`}>
                                                <h2 className="text-gtl-med font-bold text-4xl mobile:text-2xl lg:mb-3 max-w-343 mobilelarge:max-w-unset mobilelarge:mb-2.5 mobile:font-normal">  {imageprop?.title}</h2>
                                                {imageprop?.description && (
                                                    <p className="text-sofia-reg lg:text-20 text-lg lg:mb-3 max-w-343 mobilelarge:max-w-unset pb-4 lg:pb-0"
                                                        dangerouslySetInnerHTML={{ __html: imageprop?.description || '' }}
                                                    ></p>
                                                )}
                                            </div>
                                        </div >
                                    </>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
           
    );
};

export default Carousel;