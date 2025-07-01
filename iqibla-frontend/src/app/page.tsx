// src/app/page.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles (ensure these are also in globals.css as per previous instruction)
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export default function HomePage() {
    return (
        // Removed bg-gray-100 from main here, sections will have their own backgrounds
        <main className="min-h-screen">
            {/* Main Hero Slideshow Section */}
            <section className="relative w-full h-screen page-content-padding"> {/* Added page-content-padding */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    className="w-full h-full" // Swiper takes full height of its parent section
                >
                    {/* Slide 1: Salat Counter */}
                    <SwiperSlide className="relative bg-black flex items-center justify-center">
                        {/* Background Image */}
                        <Image
                            src="/images/salat-counter.webp"
                            alt="Salat Counter Product"
                            fill
                            className="object-cover opacity-70" // Added opacity for content readability
                            priority
                        />
                        {/* Content Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-start p-8 md:p-16 text-white">
                            <div className="max-w-xl text-left">
                                <h1 className="text-4xl md:text-6xl font-bold mb-4">Salat Counter</h1>
                                <p className="text-lg md:text-xl mb-8">Helps you focus on the prayer.</p>
                                <Link href="https://iqibla.com/products/salat-counter" target="_blank" rel="noopener noreferrer"
                                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2: Zikr Premium */}
                    <SwiperSlide className="relative bg-black flex items-center justify-center">
                        {/* Background Video */}
                        <video
                            src="/videos/zikr-premium.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover opacity-70" // Added opacity
                        />
                        {/* Content Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-start p-8 md:p-16 text-white">
                            <div className="max-w-xl text-left">
                                <h1 className="text-4xl md:text-6xl font-bold mb-4">Zikr Premium</h1>
                                <p className="text-lg md:text-xl mb-8">99 Diamond Shine Faith</p>
                                <Link href="https://iqibla.com/products/zikr-m02-premium" target="_blank" rel="noopener noreferrer"
                                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 3: Qwatch S3 */}
                    <SwiperSlide className="relative bg-black flex items-center justify-center">
                        {/* Background Video */}
                        <video
                            src="/videos/qwatch-s3.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover opacity-70" // Added opacity
                        />
                        {/* Content Overlay */}
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-start p-8 md:p-16 text-white">
                            <div className="max-w-xl text-left">
                                <h1 className="text-4xl md:text-6xl font-bold mb-4">Qwatch S3</h1>
                                <p className="text-lg md:text-xl mb-8">S3 on my wrist, Faith guides every important moment.</p>
                                <Link href="https://iqibla.com/products/qwatch-s3" target="_blank" rel="noopener noreferrer"
                                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            {/* "Feed My Soul With Zikr" Section */}
            {/* Added bg-gray-50 for a very light gray background */}
            <section className="bg-gray-50 py-16 page-content-padding">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Feed My Soul With Zikr</h2>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        className="w-full h-[500px] rounded-lg overflow-hidden relative" // Added relative for custom nav positioning
                    >
                        {/* Custom Navigation Arrows */}
                        <div className="swiper-button-prev-custom absolute top-1/2 left-4 -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors duration-200">
                            {/* SVG for left arrow */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        <div className="swiper-button-next-custom absolute top-1/2 right-4 -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors duration-200">
                            {/* SVG for right arrow */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>

                        {/* Slide 1 */}
                        <SwiperSlide className="relative flex items-end justify-start">
                            <Image
                                src="/images/feed-my-soul-1.webp"
                                alt="Deepen My Daily Spiritual Journey"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-6">
                                <p className="text-lg font-semibold">Deepen My Daily Spiritual Journey</p>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide className="relative flex items-end justify-start">
                            <Image
                                src="/images/feed-my-soul-2.webp"
                                alt="Every zikr is praise and thanksgiving to Allah"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-6">
                                <p className="text-lg font-semibold">Every zikr is praise and thanksgiving to Allah</p>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide className="relative flex items-end justify-start">
                            <Image
                                src="/images/feed-my-soul-3.webp"
                                alt="Every zikr is a firm belief and a purification of the soul"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-6">
                                <p className="text-lg font-semibold">Every zikr is a firm belief and a purification of the soul</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </main>
    );
}
