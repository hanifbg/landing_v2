'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function HomePage() {
    return (
        <div className="page-content-padding">
            {/* Hero Slideshow */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                className="w-full h-screen"
            >
                {/* Salat Counter Slide */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <Image 
                            src="/images/salat-counter.webp" 
                            alt="Salat Counter" 
                            fill 
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start p-12 md:p-24">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Salat Counter</h2>
                            <p className="text-xl md:text-2xl text-white mb-8">Helps you focus on the prayer.</p>
                            <Link 
                                href="https://iqibla.com/products/salat-counter"
                                className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                
                {/* Zikr Premium Slide */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <video 
                            src="/videos/zikr-premium.mp4" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start p-12 md:p-24">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Zikr Premium</h2>
                            <p className="text-xl md:text-2xl text-white mb-8">99 Diamond Shine Faith</p>
                            <Link 
                                href="https://iqibla.com/products/zikr-m02-premium"
                                className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                
                {/* Qwatch S3 Slide */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <video 
                            src="/videos/qwatch-s3.mp4" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start p-12 md:p-24">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Qwatch S3</h2>
                            <p className="text-xl md:text-2xl text-white mb-8">S3 on my wrist, Faith guides every important moment.</p>
                            <Link 
                                href="https://iqibla.com/products/qwatch-s3"
                                className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            
            {/* Feed My Soul With Zikr Section */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">Feed My Soul With Zikr</h2>
                
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        className="w-full h-[500px] rounded-lg overflow-hidden feed-my-soul-swiper"
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="relative w-full h-full">
                                <Image 
                                    src="/images/feed-my-soul-1.webp" 
                                    alt="Deepen My Daily Spiritual Journey" 
                                    fill 
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-semibold text-white">Deepen My Daily Spiritual Journey</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="relative w-full h-full">
                                <Image 
                                    src="/images/feed-my-soul-2.webp" 
                                    alt="Every zikr is praise and thanksgiving to Allah" 
                                    fill 
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-semibold text-white">Every zikr is praise and thanksgiving to Allah</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        {/* Slide 3 */}
                        <SwiperSlide>
                            <div className="relative w-full h-full">
                                <Image 
                                    src="/images/feed-my-soul-3.webp" 
                                    alt="Every zikr is a firm belief and a purification of the soul" 
                                    fill 
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-semibold text-white">Every zikr is a firm belief and a purification of the soul</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    
                    {/* Custom Navigation Arrows */}
                    <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center cursor-pointer shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center cursor-pointer shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}