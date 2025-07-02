// src/app/page.tsx
'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles (ensure these are also in globals.css as per previous instruction)
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export default function HomePage() {
    // State for video playback
    const [isPlayingVideo, setIsPlayingVideo] = useState(false);
    
    // Handler for video playback
    const handlePlayVideo = () => setIsPlayingVideo(true);
    
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
            <section className="bg-gray-200 py-16 page-content-padding">
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

            {/* "Our Product Categories" Section */}
            <section className="bg-white py-16 page-content-padding">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our product categories</h2>
                    
                    {/* Responsive Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Category Card 1: Zikr Rings */}
                        <Link href="/shop?category=Zikr%20Rings" className="block h-[400px]">
                            <div className="relative w-full h-full bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105">
                                <Image 
                                    src="/images/category-zikr-rings.webp" 
                                    alt="Zikr Rings Category" 
                                    fill 
                                    className="object-cover opacity-70"
                                />
                                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Zikr Rings</h3>
                                    <p className="text-sm mb-6">The Inventor of the Zikr Ring.</p>
                                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors duration-200">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </Link>
                        
                        {/* Category Card 2: Qwatch */}
                        <Link href="/shop?category=Qwatch" className="block h-[400px]">
                            <div className="relative w-full h-full bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105">
                                <Image 
                                    src="/images/category-qwatch.webp" 
                                    alt="Qwatch Category" 
                                    fill 
                                    className="object-cover opacity-70"
                                />
                                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Qwatch</h3>
                                    <p className="text-sm mb-6">My spiritual companion for Daily Guidance.</p>
                                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors duration-200">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </Link>
                        
                        {/* Category Card 3: Salat Counter */}
                        <Link href="/shop?category=Salat%20Counter" className="block h-[400px]">
                            <div className="relative w-full h-full bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105">
                                <Image 
                                    src="/images/category-salat-counter.webp" 
                                    alt="Salat Counter Category" 
                                    fill 
                                    className="object-cover opacity-70"
                                />
                                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Salat Counter</h3>
                                    <p className="text-sm mb-6">Helps you focus on the prayer.</p>
                                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors duration-200">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Full-screen Video Section */}
            <section className="relative w-full h-screen bg-neutral-900 flex items-center justify-center">
                {!isPlayingVideo ? (
                    <>
                        {/* Background Image */}
                        <Image
                            src="/images/video-section-bg.webp"
                            alt="Video Background"
                            fill
                            className="object-cover opacity-80"
                        />
                        
                        {/* Play Button */}
                        <button 
                            onClick={handlePlayVideo}
                            className="absolute z-10 bg-white/30 backdrop-blur-sm rounded-full p-6 cursor-pointer hover:bg-white/50 transition-colors duration-200"
                            aria-label="Play video"
                        >
                            {/* Play Icon (Triangle) */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </>
                ) : (
                    <iframe
                        src="https://www.youtube.com/embed/rF_kLJ87zMQ?autoplay=1&rel=0&modestbranding=1&controls=1"
                        title="iQIBLA Product Video"
                        className="absolute inset-0 w-full h-full"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
            </section>

            {/* iQIBLA Life Section */}
            <section className="bg-white py-16 page-content-padding">
                <div className="container mx-auto px-4">
                    {/* Main Section Headline */}
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">iQIBLA Life: Embrace our faith, anywhere, anytime</h2>
                    
                    {/* Part 1: Two-Column Layout with Card Frame */}
                    <div className="bg-green-50 rounded-xl p-8 overflow-hidden shadow-md">
                        <div className="flex flex-col md:flex-row md:space-x-8 items-center">
                            {/* Left Column (Text Content - 20% width) */}
                            <div className="w-full md:w-1/5 mb-8 md:mb-0">
                                <h3 className="text-2xl font-semibold text-green-600 mb-4">What is iQIBLA Life</h3>
                                <p className="text-gray-700 mb-4">With over 1 million downloads worldwide, iQIBLA Life stands as the most reliable and popular app for Muslim lifestyle.</p>
                                <p className="text-gray-700">In the past 5 years, iQIBLA Life has helped Muslims around the world Maintain accurate prayer times at all times, anywhere, correctly find the direction of Qibla, and lListen to Quran in peace, record every Tasbih, and customize their own Tasbih goals.iQIBLA became an indispensable Islamic companion.</p>
                            </div>
                            
                            {/* Right Column (Image - 80% width) */}
                            <div className="w-full md:w-4/5 overflow-hidden rounded-xl">
                                <Image
                                    src="/images/iqibla-life-part1.webp"
                                    alt="iQIBLA Life App"
                                    width={1200}
                                    height={800}
                                    className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Part 2: Three-Column Grid Layout */}
                    <div className="container mx-auto px-4 mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Card 1: The Holy Quran Player */}
                            <div className="bg-green-50 rounded-xl p-6 shadow-md overflow-hidden flex flex-col justify-between min-h-[800px]">
                                <div>
                                    <h3 className="text-xl font-semibold text-green-600 mb-4">The Holy Quran Player</h3>
                                    <p className="text-gray-700 mb-6">In every quiet moment, iQIBLA Life's Quran Player brings you spiritual strength. Whether it's under the first rays of morning sun or under the stars at night, the gentle sound of the recitation will guide us will guide you in your communion with Allah. In iQIBLA Life, you can add all your favorite chapters to the list. They are all your trusted companions accompanying you through every moment of life and feeling the power of faith. Walking with the Quran brings true Walking with the Quran brings tranquility and peace to your soul.</p>
                                </div>
                                <div className="w-full relative h-[450px] rounded-lg overflow-hidden mt-auto">
                                    <video 
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline 
                                        className="absolute inset-0 w-full h-full object-contain"
                                    >
                                        <source src="/videos/holy-quran-player.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            
                            {/* Card 2: Qibla Compass */}
                            <div className="bg-green-50 rounded-xl p-6 shadow-md overflow-hidden flex flex-col justify-between min-h-[800px]">
                                <div>
                                    <h3 className="text-xl font-semibold text-green-600 mb-4">Qibla Compass</h3>
                                    <p className="text-gray-700 mb-6">In every moment of prayer, the Qibla Compass feature in iQIBLA Life provides us with precise navigation. No matter where we are, a simple touch will show you the correct way towards Mecca, ensuring that each prayer is filled with confidence and tranquility.</p>
                                </div>
                                <div className="w-full relative h-[450px] rounded-lg overflow-hidden mt-auto">
                                    <video 
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline 
                                        className="absolute inset-0 w-full h-full object-contain"
                                    >
                                        <source src="/videos/qibla-compass.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            
                            {/* Card 3: 5 Prayer Time Reminders */}
                            <div className="bg-green-50 rounded-xl p-6 shadow-md overflow-hidden flex flex-col justify-between min-h-[800px]">
                                <div>
                                    <h3 className="text-xl font-semibold text-green-600 mb-4">5 Prayer Time Reminders</h3>
                                    <p className="text-gray-700 mb-6">In the iQIBLA Life app, the 5 Prayer Time Reminders feature provides you with precise prayer time notifications, ensuring us never miss the five daily prayers. Users can fine-tune the reminders according to their local time, making each prayer an essential part of your daily routine. This feature gently prompts you to pause and engage in moments of spiritual reflection and tranquility.</p>
                                </div>
                                <div className="w-full relative h-[450px] rounded-lg overflow-hidden mt-auto">
                                    <video 
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline 
                                        className="absolute inset-0 w-full h-full object-contain"
                                    >
                                        <source src="/videos/prayer-time-reminders.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
