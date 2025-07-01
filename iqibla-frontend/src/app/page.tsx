'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function HomePage() {
    return (
        <div className="page-content-padding">
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
                
                {/* Zikr Premium Slide - Placeholder */}
                <SwiperSlide>
                    <div className="relative w-full h-full bg-gray-800 flex justify-center items-center">
                        <h2 className="text-4xl text-white">Zikr Premium - Coming Soon</h2>
                    </div>
                </SwiperSlide>
                
                {/* Qwatch S3 Slide - Placeholder */}
                <SwiperSlide>
                    <div className="relative w-full h-full bg-gray-700 flex justify-center items-center">
                        <h2 className="text-4xl text-white">Qwatch S3 - Coming Soon</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}