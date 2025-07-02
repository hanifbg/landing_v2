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
                                    <p className="text-gray-700 mb-6">In every quiet moment, iQIBLA Life&apos;s Quran Player brings you spiritual strength. Whether it&apos;s under the first rays of morning sun or under the stars at night, the gentle sound of the recitation will guide us will guide you in your communion with Allah. In iQIBLA Life, you can add all your favorite chapters to the list. They are all your trusted companions accompanying you through every moment of life and feeling the power of faith. Walking with the Quran brings true Walking with the Quran brings tranquility and peace to your soul.</p>
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
                    
                    {/* Part 3: Two-Column Grid Layout */}
                    <div className="container mx-auto px-4 mt-12 mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Card 1: Custom Tasbih */}
                            <div className="bg-green-50 rounded-xl p-6 shadow-md overflow-hidden flex flex-col min-h-[600px]">
                                <h3 className="text-xl font-semibold text-green-600 mb-4">Custom Tasbih</h3>
                                <p className="text-gray-700 mb-6">The Custom Tasbih feature in the iQIBLA Life app allows users to set personalized prayer goals. Whether we want to establish specific prayer counts or choose your preferred prayer phrases, we can customize your experience according to your needs. With an intuitive interface, you can easily track and record each prayer session, Helping you focus on reflect on your spirituality. Custom Tasbih makes your faith journey personalised and flexible, allowing you to maintain a deeper connection with your inner self in your daily life.</p>
                                <Image
                                    src="/images/custom-tasbih.png"
                                    alt="Custom Tasbih Feature"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-lg object-contain mt-auto transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            
                            {/* Card 2: Download App */}
                            <div className="bg-green-50 rounded-xl p-6 shadow-md overflow-hidden flex flex-col min-h-[600px]">
                                <div className="flex flex-col md:flex-row gap-6 h-full">
                                    {/* Inner Left Column (Text) */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-green-600 mb-4">Download iQIBLA Life now and embark on your journey of faith!</h3>
                                        <p className="text-gray-700 mb-6">This all-in-one Muslim lifestyle assistant that offers accurate prayer times, Qibla guidance, and a plethora of Islamic functions, filling your daily life with spirituality and inspiration. No matter where you are, iQIBLA Life will be your trusted companion. Join us today and experience the beauty and power of faith!</p>
                                        
                                        {/* App Download Icons */}
                                        <div className="flex space-x-4 mb-2">
                                            <a href="#" target="_blank" rel="noopener noreferrer" className="block">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40" fill="none">
                                                    <path d="M110.135 0H9.53502C9.16802 0 8.80502 0 8.44002 0.002C8.13402 0.004 7.83002 0.01 7.52102 0.015C6.85002 0.023 6.18002 0.082 5.51702 0.19C4.85575 0.302207 4.2152 0.513588 3.61702 0.817C2.71709 1.27724 1.93817 1.94292 1.34332 2.76014C0.748475 3.57737 0.354408 4.52317 0.193023 5.521C0.0817514 6.18271 0.0219057 6.85205 0.0140234 7.523C0.00402344 7.83 0.00402344 8.138 -0.000976562 8.444V31.56C0.00402344 31.87 0.00502344 32.17 0.0140234 32.481C0.0220234 33.152 0.0820234 33.821 0.194023 34.483C0.304023 35.146 0.514023 35.789 0.818023 36.388C1.12102 36.986 1.51902 37.531 1.99702 38.002C2.47002 38.479 3.01702 38.877 3.61502 39.181C4.21355 39.4851 4.85437 39.6974 5.51602 39.811C6.17902 39.921 6.84902 39.979 7.52002 39.988C7.83002 39.995 8.13302 39.999 8.43902 39.999C8.80502 40.001 9.16702 40.001 9.53402 40.001H110.134C110.494 40.001 110.858 40.001 111.218 39.999C111.522 39.999 111.835 39.995 112.14 39.989C112.81 39.979 113.478 39.921 114.14 39.811C114.804 39.6966 115.447 39.4843 116.048 39.181C116.647 38.8765 117.193 38.4777 117.666 38C118.142 37.5273 118.541 36.9827 118.848 36.386C119.15 35.786 119.358 35.144 119.467 34.481C119.578 33.82 119.64 33.151 119.652 32.479C119.656 32.169 119.656 31.869 119.656 31.558C119.664 31.194 119.664 30.833 119.664 30.464V9.536C119.664 9.17 119.664 8.806 119.656 8.444C119.656 8.138 119.656 7.83 119.652 7.524C119.64 6.85266 119.578 6.18314 119.467 5.521C119.358 4.8589 119.149 4.21723 118.847 3.618C118.23 2.41511 117.251 1.43588 116.049 0.818C115.448 0.515273 114.805 0.303946 114.141 0.191C113.48 0.081 112.811 0.022 112.141 0.015C111.836 0.01 111.523 0.004 111.219 0.002C110.859 0 110.494 0 110.135 0Z" fill="#A6A6A6"/>
                                                    <path d="M8.44505 39.125C8.14005 39.125 7.84305 39.121 7.54105 39.115C6.91452 39.1066 6.28947 39.0518 5.67105 38.951C5.09489 38.8516 4.53675 38.6669 4.01505 38.403C3.49793 38.1414 3.02625 37.7984 2.61805 37.387C2.20411 36.9801 1.85956 36.5082 1.59805 35.99C1.33311 35.4687 1.14965 34.9099 1.05405 34.333C0.951341 33.7131 0.895848 33.0863 0.888047 32.458C0.881047 32.248 0.873047 31.545 0.873047 31.545V8.445C0.873047 8.445 0.882047 7.753 0.888047 7.55C0.8955 6.92272 0.950659 6.29691 1.05305 5.678C1.14866 5.09952 1.33211 4.53905 1.59705 4.016C1.85705 3.498 2.20005 3.026 2.61205 2.618C3.43963 1.78636 4.50889 1.23756 5.66705 1.05C6.28705 0.95 6.91505 0.895 7.54305 0.887L8.44505 0.875H111.214L112.127 0.888C112.75 0.895 113.371 0.949 113.985 1.05C114.566 1.14872 115.129 1.33341 115.656 1.598C116.694 2.13288 117.538 2.97908 118.071 4.018C118.331 4.538 118.512 5.094 118.606 5.667C118.71 6.291 118.768 6.922 118.78 7.554C118.783 7.837 118.783 8.142 118.783 8.444C118.791 8.819 118.791 9.176 118.791 9.536V30.465C118.791 30.828 118.791 31.183 118.783 31.54C118.783 31.865 118.783 32.163 118.779 32.47C118.768 33.09 118.71 33.71 118.609 34.323C118.516 34.9041 118.334 35.4673 118.069 35.993C117.805 36.5056 117.462 36.9733 117.053 37.379C116.644 37.7927 116.172 38.1377 115.653 38.401C115.128 38.6671 114.566 38.8525 113.985 38.951C113.367 39.052 112.742 39.107 112.116 39.114C111.823 39.121 111.516 39.125 111.219 39.125L110.135 39.127L8.44505 39.125Z" fill="black"/>
                                                    <path d="M24.769 20.3C24.7799 19.4655 25.0016 18.6474 25.4135 17.9217C25.8254 17.1959 26.4142 16.5861 27.125 16.149C26.6734 15.5039 26.0776 14.973 25.385 14.5984C24.6924 14.2238 23.922 14.0158 23.135 13.991C21.455 13.815 19.827 14.996 18.971 14.996C18.099 14.996 16.781 14.008 15.363 14.038C14.4453 14.0676 13.5509 14.3344 12.767 14.8125C11.9831 15.2906 11.3364 15.9636 10.89 16.766C8.95599 20.114 10.399 25.035 12.251 27.742C13.178 29.067 14.261 30.547 15.679 30.495C17.066 30.437 17.584 29.61 19.259 29.61C20.917 29.61 21.403 30.495 22.849 30.462C24.338 30.437 25.275 29.13 26.169 27.792C26.8355 26.8479 27.3485 25.8043 27.689 24.7C26.824 24.3343 26.0858 23.7221 25.5666 22.9396C25.0473 22.1571 24.7699 21.2391 24.769 20.3ZM22.037 12.21C22.8486 11.236 23.2486 9.98407 23.152 8.71997C21.9119 8.85015 20.7665 9.44287 19.944 10.38C19.542 10.8374 19.234 11.3696 19.0377 11.9462C18.8414 12.5227 18.7606 13.1322 18.8 13.74C19.4201 13.7464 20.0336 13.612 20.5943 13.347C21.155 13.082 21.6483 12.6932 22.037 12.21Z" fill="white"/>
                                                    <path d="M42.302 27.14H37.57L36.433 30.496H34.428L38.912 18.078H40.995L45.478 30.496H43.439L42.303 27.14H42.302ZM38.059 25.59H41.811L39.961 20.144H39.91L38.06 25.591L38.059 25.59ZM55.16 25.97C55.16 28.783 53.654 30.59 51.381 30.59C50.8055 30.62 50.2333 30.4874 49.7296 30.2075C49.226 29.9275 48.8113 29.5115 48.533 29.007H48.49V33.491H46.63V21.442H48.43V22.948H48.463C48.7541 22.4456 49.1759 22.0315 49.6835 21.7498C50.1912 21.4681 50.7657 21.3292 51.346 21.348C53.644 21.348 55.16 23.164 55.16 25.97ZM53.25 25.97C53.25 24.137 52.302 22.932 50.857 22.932C49.437 22.932 48.482 24.162 48.482 25.97C48.482 27.794 49.437 29.016 50.857 29.016C52.302 29.016 53.25 27.819 53.25 25.97ZM65.125 25.97C65.125 28.783 63.619 30.59 61.346 30.59C60.7705 30.62 60.1983 30.4874 59.6946 30.2075C59.191 29.9275 58.7763 29.5115 58.498 29.007H58.455V33.491H56.596V21.442H58.395V22.948H58.429C58.7201 22.4456 59.1419 22.0315 59.6495 21.7498C60.1572 21.4681 60.7317 21.3292 61.312 21.348C63.61 21.348 65.125 23.164 65.125 25.97ZM63.215 25.97C63.215 24.137 62.267 22.932 60.822 22.932C59.402 22.932 58.447 24.162 58.447 25.97C58.447 27.794 59.402 29.016 60.822 29.016C62.267 29.016 63.215 27.819 63.215 25.97ZM71.71 27.036C71.848 28.268 73.044 29.076 74.68 29.076C76.246 29.076 77.373 28.268 77.373 27.157C77.373 26.193 76.693 25.617 75.083 25.221L73.474 24.833C71.194 24.283 70.135 23.216 70.135 21.485C70.135 19.343 72.002 17.871 74.654 17.871C77.278 17.871 79.077 19.343 79.137 21.485H77.261C77.149 20.246 76.125 19.498 74.627 19.498C73.13 19.498 72.106 20.255 72.106 21.356C72.106 22.234 72.76 22.751 74.361 23.146L75.729 23.482C78.277 24.085 79.335 25.108 79.335 26.925C79.335 29.248 77.485 30.703 74.542 30.703C71.788 30.703 69.928 29.283 69.808 27.036H71.71ZM83.346 19.3V21.442H85.068V22.914H83.346V27.905C83.346 28.681 83.691 29.042 84.448 29.042C84.652 29.038 84.856 29.024 85.059 28.999V30.462C84.719 30.525 84.373 30.554 84.027 30.548C82.194 30.548 81.479 29.859 81.479 28.103V22.914H80.163V21.442H81.479V19.3H83.346ZM86.065 25.97C86.065 23.121 87.743 21.331 90.359 21.331C92.984 21.331 94.654 23.121 94.654 25.97C94.654 28.826 92.993 30.608 90.359 30.608C87.726 30.608 86.065 28.826 86.065 25.97ZM92.76 25.97C92.76 24.016 91.865 22.862 90.359 22.862C88.853 22.862 87.959 24.024 87.959 25.97C87.959 27.932 88.853 29.076 90.359 29.076C91.865 29.076 92.76 27.932 92.76 25.97ZM96.186 21.442H97.959V22.983H98.002C98.1221 22.502 98.404 22.077 98.8004 21.7793C99.1968 21.4816 99.6836 21.3293 100.179 21.348C100.393 21.347 100.607 21.37 100.816 21.417V23.155C100.546 23.0725 100.264 23.0346 99.981 23.043C99.711 23.032 99.4418 23.0796 99.1919 23.1825C98.9421 23.2853 98.7174 23.4411 98.5334 23.639C98.3494 23.8368 98.2104 24.0722 98.1259 24.3289C98.0414 24.5856 98.0135 24.8575 98.044 25.126V30.496H96.186V21.442ZM109.384 27.837C109.134 29.48 107.534 30.608 105.486 30.608C102.852 30.608 101.217 28.844 101.217 26.013C101.217 23.173 102.861 21.331 105.407 21.331C107.913 21.331 109.487 23.051 109.487 25.797V26.434H103.093V26.546C103.064 26.8792 103.105 27.2148 103.216 27.5307C103.326 27.8465 103.502 28.1352 103.732 28.3777C103.963 28.6202 104.242 28.8109 104.552 28.9372C104.862 29.0634 105.195 29.1223 105.529 29.11C105.968 29.151 106.408 29.0493 106.785 28.82C107.162 28.5906 107.454 28.2459 107.619 27.837H109.384ZM103.102 25.135H107.628C107.645 24.8354 107.599 24.5356 107.495 24.2544C107.39 23.9732 107.229 23.7167 107.02 23.5009C106.812 23.2851 106.561 23.1148 106.283 23.0005C106.006 22.8863 105.708 22.8306 105.408 22.837C105.105 22.8351 104.805 22.8932 104.525 23.008C104.245 23.1227 103.99 23.2918 103.776 23.5054C103.562 23.7191 103.392 23.9731 103.276 24.2528C103.16 24.5325 103.101 24.8323 103.102 25.135Z" fill="white"/>
                                                    <path d="M37.8261 8.73101C38.2158 8.70306 38.6068 8.76192 38.9709 8.90336C39.3351 9.0448 39.6633 9.26528 39.9319 9.54892C40.2005 9.83256 40.4028 10.1723 40.5243 10.5436C40.6457 10.9148 40.6832 11.3085 40.6341 11.696C40.6341 13.602 39.6041 14.698 37.8261 14.698H35.6711V8.73001H37.8261V8.73101ZM36.5981 13.854H37.7231C38.0015 13.8705 38.28 13.8248 38.5384 13.7201C38.7969 13.6154 39.0287 13.4544 39.2171 13.2489C39.4055 13.0434 39.5457 12.7984 39.6275 12.5318C39.7094 12.2653 39.7308 11.9839 39.6901 11.708C39.7279 11.4332 39.7044 11.1535 39.6213 10.8889C39.5382 10.6242 39.3977 10.3813 39.2097 10.1773C39.0217 9.97337 38.791 9.81353 38.534 9.70923C38.277 9.60493 38.0001 9.55875 37.7231 9.57401H36.5981V13.854ZM41.6801 12.444C41.6529 12.1487 41.6876 11.8509 41.782 11.5697C41.8763 11.2885 42.0283 11.03 42.2282 10.8109C42.4281 10.5917 42.6715 10.4167 42.9428 10.2969C43.2142 10.1771 43.5075 10.1153 43.8041 10.1153C44.1008 10.1153 44.3941 10.1771 44.6655 10.2969C44.9368 10.4167 45.1802 10.5917 45.3801 10.8109C45.58 11.03 45.7319 11.2885 45.8263 11.5697C45.9207 11.8509 45.9554 12.1487 45.9281 12.444C45.9577 12.7406 45.9247 13.0401 45.8315 13.3232C45.7382 13.6063 45.5866 13.8667 45.3866 14.0877C45.1865 14.3087 44.9424 14.4853 44.6699 14.6061C44.3975 14.727 44.1027 14.7894 43.8046 14.7894C43.5066 14.7894 43.2118 14.727 42.9393 14.6061C42.6669 14.4853 42.4227 14.3087 42.2227 14.0877C42.0226 13.8667 41.8711 13.6063 41.7778 13.3232C41.6845 13.0401 41.6506 12.7406 41.6801 12.444ZM45.0141 12.444C45.0141 11.468 44.5751 10.897 43.8061 10.897C43.0331 10.897 42.5991 11.468 42.5991 12.444C42.5991 13.428 43.0331 13.994 43.8061 13.994C44.5761 13.994 45.0141 13.424 45.0141 12.444ZM51.5731 14.698H50.6511L49.7211 11.381H49.6511L48.7241 14.698H47.8111L46.5691 10.195H47.4711L48.2771 13.631H48.3441L49.2701 10.195H50.1221L51.0481 13.631H51.1181L51.9211 10.195H52.8101L51.5731 14.698ZM53.8541 10.195H54.7091V10.91H54.7751C55.0061 10.383 55.5461 10.061 56.1191 10.108C56.3383 10.0916 56.5583 10.1246 56.7629 10.2047C56.9676 10.2848 57.1515 10.4099 57.3013 10.5708C57.451 10.7316 57.5626 10.9241 57.6278 11.134C57.6931 11.3438 57.7103 11.5656 57.6781 11.783V14.698H56.7891V12.006C56.7891 11.282 56.4751 10.922 55.8171 10.922C55.6684 10.9151 55.52 10.9405 55.3819 10.9963C55.2439 11.0522 55.1196 11.1372 55.0175 11.2455C54.9154 11.3539 54.8379 11.4831 54.7904 11.6242C54.7429 11.7653 54.7264 11.915 54.7421 12.063V14.698H53.8541V10.195ZM59.0941 8.43701H59.9821V14.697H59.0941V8.43701ZM61.2181 12.444C61.1901 12.1483 61.2242 11.8499 61.3182 11.5681C61.4122 11.2863 61.564 11.0273 61.7639 10.8075C61.9638 10.5878 62.2074 10.4122 62.4791 10.2921C62.7508 10.172 63.0446 10.1099 63.3416 10.1099C63.6387 10.1099 63.9325 10.172 64.2042 10.2921C64.4759 10.4122 64.7195 10.5878 64.9194 10.8075C65.1193 11.0273 65.2711 11.2863 65.3651 11.5681C65.4591 11.8499 65.4931 12.1483 65.4651 12.444C65.4947 12.7406 65.4617 13.0401 65.3685 13.3232C65.2752 13.6063 65.1236 13.8667 64.9236 14.0877C64.7235 14.3087 64.4794 14.4853 64.2069 14.6061C63.9345 14.727 63.6397 14.7894 63.3416 14.7894C63.0436 14.7894 62.7488 14.727 62.4763 14.6061C62.2039 14.4853 61.9597 14.3087 61.7597 14.0877C61.5596 13.8667 61.4081 13.6063 61.3148 13.3232C61.2215 13.0401 61.1886 12.7406 61.2181 12.444ZM64.5511 12.444C64.5511 11.468 64.1121 10.897 63.3431 10.897C62.5701 10.897 62.1361 11.468 62.1361 12.444C62.1361 13.428 62.5701 13.994 63.3431 13.994C64.1131 13.994 64.5511 13.424 64.5511 12.444ZM66.4001 13.424C66.4001 12.614 67.0041 12.146 68.0761 12.08L69.2961 12.01V11.621C69.2961 11.146 68.9811 10.877 68.3741 10.877C67.8771 10.877 67.5341 11.059 67.4351 11.377H66.5751C66.6651 10.604 67.3931 10.107 68.4151 10.107C69.5431 10.107 70.1801 10.67 70.1801 11.621V14.698H69.3251V14.065H69.2551C68.9641 14.527 68.4471 14.797 67.9021 14.772C67.7131 14.7917 67.522 14.7716 67.3412 14.7129C67.1603 14.6542 66.9939 14.5582 66.8524 14.4312C66.711 14.3042 66.5978 14.1489 66.52 13.9754C66.4423 13.802 66.4008 13.6141 66.4001 13.424ZM69.2951 13.04V12.663L68.1951 12.733C67.5751 12.775 67.2951 12.986 67.2951 13.383C67.2951 13.788 67.6461 14.023 68.1291 14.023C68.2707 14.0373 68.4136 14.023 68.5495 13.9809C68.6854 13.9389 68.8115 13.87 68.9202 13.7783C69.029 13.6866 69.1182 13.574 69.1826 13.4472C69.247 13.3204 69.2853 13.1819 69.2951 13.04ZM71.3481 12.444C71.3481 11.021 72.0801 10.12 73.2181 10.12C73.4994 10.1072 73.7785 10.1747 74.0229 10.3146C74.2672 10.4545 74.4668 10.661 74.5981 10.91H74.6651V8.43701H75.5531V14.697H74.7021V13.987H74.6321C74.4904 14.2345 74.2836 14.4385 74.0341 14.5769C73.7847 14.7153 73.5022 14.7827 73.2171 14.772C72.0721 14.772 71.3481 13.871 71.3481 12.444ZM72.2661 12.444C72.2661 13.399 72.7161 13.974 73.4691 13.974C74.2191 13.974 74.6811 13.391 74.6811 12.448C74.6811 11.51 74.2131 10.918 73.4691 10.918C72.7211 10.918 72.2661 11.498 72.2661 12.444ZM79.2301 12.444C79.2021 12.1483 79.2362 11.8499 79.3302 11.5681C79.4242 11.2863 79.576 11.0273 79.7759 10.8075C79.9758 10.5878 80.2194 10.4122 80.4911 10.2921C80.7628 10.172 81.0566 10.1099 81.3536 10.1099C81.6507 10.1099 81.9445 10.172 82.2162 10.2921C82.4879 10.4122 82.7315 10.5878 82.9314 10.8075C83.1313 11.0273 83.2831 11.2863 83.3771 11.5681C83.4711 11.8499 83.5051 12.1483 83.4771 12.444C83.5067 12.7406 83.4737 13.0401 83.3805 13.3232C83.2872 13.6063 83.1357 13.8667 82.9356 14.0877C82.7355 14.3087 82.4914 14.4853 82.2189 14.6061C81.9465 14.727 81.6517 14.7894 81.3536 14.7894C81.0556 14.7894 80.7608 14.727 80.4883 14.6061C80.2159 14.4853 79.9717 14.3087 79.7717 14.0877C79.5716 13.8667 79.4201 13.6063 79.3268 13.3232C79.2335 13.0401 79.2006 12.7406 79.2301 12.444ZM82.5631 12.444C82.5631 11.468 82.1251 10.897 81.3551 10.897C80.5831 10.897 80.1481 11.468 80.1481 12.444C80.1481 13.428 80.5831 13.994 81.3551 13.994C82.1251 13.994 82.5631 13.424 82.5631 12.444ZM84.6701 10.195H85.5251V10.91H85.5911C85.8221 10.383 86.3611 10.061 86.9351 10.108C87.1543 10.0916 87.3743 10.1246 87.5789 10.2047C87.7836 10.2848 87.9675 10.4099 88.1173 10.5708C88.267 10.7316 88.3786 10.9241 88.4438 11.134C88.5091 11.3438 88.5263 11.5656 88.4941 11.783V14.698H87.6051V12.006C87.6051 11.282 87.2911 10.922 86.6331 10.922C86.4844 10.9151 86.336 10.9405 86.1979 10.9963C86.0599 11.0522 85.9356 11.1372 85.8335 11.2455C85.7314 11.3539 85.6539 11.4831 85.6064 11.6242C85.5589 11.7653 85.5424 11.915 85.5581 12.063V14.698H84.6691L84.6701 10.195ZM93.5151 9.07401V10.215H94.4911V10.964H93.5151V13.279C93.5151 13.751 93.7101 13.958 94.1521 13.958C94.2651 13.958 94.3781 13.95 94.4911 13.937V14.677C94.3311 14.706 94.1691 14.721 94.0071 14.723C93.0191 14.723 92.6261 14.375 92.6261 13.507V10.964H91.9111V10.215H92.6261V9.07401H93.5151ZM95.7051 8.43701H96.5851V10.918H96.6551C96.7735 10.6587 96.9689 10.4421 97.2148 10.2979C97.4607 10.1537 97.745 10.0888 98.0291 10.112C98.2471 10.1002 98.4649 10.1366 98.6672 10.2187C98.8694 10.3008 99.0511 10.4265 99.1991 10.5869C99.3472 10.7473 99.458 10.9383 99.5237 11.1465C99.5894 11.3546 99.6083 11.5747 99.5791 11.791V14.698H98.6901V12.01C98.6901 11.29 98.3551 10.926 97.7271 10.926C97.5743 10.9135 97.4207 10.9344 97.2768 10.9875C97.133 11.0406 97.0025 11.1244 96.8945 11.2332C96.7865 11.342 96.7035 11.4731 96.6515 11.6173C96.5994 11.7615 96.5795 11.9153 96.5931 12.068V14.698H95.7051V8.43701ZM104.761 13.482C104.64 13.8934 104.379 14.2493 104.023 14.4874C103.666 14.7256 103.237 14.831 102.811 14.785C102.514 14.7931 102.219 14.7364 101.947 14.6189C101.674 14.5014 101.43 14.3259 101.232 14.1046C101.034 13.8834 100.886 13.6216 100.8 13.3376C100.713 13.0536 100.689 12.7541 100.73 12.46C100.691 12.1652 100.715 11.8653 100.802 11.5808C100.888 11.2962 101.035 11.0335 101.232 10.8105C101.428 10.5875 101.671 10.4094 101.943 10.2882C102.214 10.167 102.509 10.1055 102.806 10.108C104.059 10.108 104.815 10.964 104.815 12.378V12.688H101.635V12.738C101.621 12.9033 101.642 13.0697 101.696 13.2266C101.75 13.3834 101.837 13.5271 101.95 13.6486C102.063 13.7701 102.2 13.8666 102.352 13.9319C102.505 13.9973 102.669 14.03 102.835 14.028C103.048 14.0532 103.263 14.0147 103.453 13.9175C103.644 13.8203 103.801 13.6687 103.905 13.482H104.761ZM101.635 12.031H103.91C103.921 11.8798 103.901 11.7278 103.85 11.585C103.799 11.4421 103.719 11.3115 103.614 11.2016C103.51 11.0917 103.384 11.0048 103.244 10.9467C103.103 10.8885 102.953 10.8604 102.801 10.864C102.647 10.8621 102.495 10.891 102.352 10.949C102.21 11.007 102.081 11.0929 101.972 11.2017C101.863 11.3104 101.778 11.4399 101.72 11.5823C101.662 11.7247 101.633 11.8773 101.635 12.031Z" fill="white"/>
                                                </svg>
                                            </a>
                                            <a href="#" target="_blank" rel="noopener noreferrer" className="block">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="136" height="40" viewBox="0 0 136 40" fill="none">
                                                    <path d="M130.54 39.943H5.24003C2.48503 39.943 0.228027 37.713 0.228027 34.989V5.26703C0.228027 2.54403 2.48503 0.314026 5.24003 0.314026H130.54C133.295 0.314026 135.551 2.54403 135.551 5.26703V34.99C135.551 37.714 133.295 39.944 130.539 39.944L130.54 39.943Z" fill="black"/>
                                                    <path d="M130.54 1.10803C132.86 1.10803 134.748 2.97403 134.748 5.26803V34.989C134.748 37.283 132.86 39.149 130.539 39.149H5.24003C2.92003 39.149 1.03203 37.283 1.03203 34.989V5.26703C1.03203 2.97403 2.92003 1.10703 5.24003 1.10703H130.54V1.10803ZM130.54 0.314026H5.24003C2.48503 0.314026 0.228027 2.54403 0.228027 5.26703V34.99C0.228027 37.714 2.48503 39.944 5.24003 39.944H130.54C133.295 39.944 135.551 37.714 135.551 34.99V5.26703C135.551 2.54403 133.296 0.314026 130.54 0.314026Z" fill="#A6A6A6"/>
                                                    <path d="M47.7599 10.4631C47.7599 11.2901 47.5089 11.9531 47.0149 12.4461C46.4469 13.0321 45.7079 13.3271 44.8019 13.3271C43.9359 13.3271 43.1969 13.0271 42.5909 12.4371C41.9829 11.8371 41.6799 11.1021 41.6799 10.2211C41.6799 9.34105 41.9829 8.60505 42.5899 8.01105C43.1969 7.41505 43.9359 7.11505 44.8019 7.11505C45.2329 7.11505 45.6439 7.20305 46.0359 7.36705C46.4269 7.53105 46.7459 7.75405 46.9759 8.02905L46.4519 8.55205C46.0499 8.08205 45.5019 7.85105 44.8019 7.85105C44.1709 7.85105 43.6229 8.06905 43.1579 8.50805C42.6979 8.94905 42.4679 9.52005 42.4679 10.2211C42.4679 10.9221 42.6979 11.4981 43.1579 11.9391C43.5983 12.3656 44.1889 12.6017 44.8019 12.5961C45.4719 12.5961 46.0359 12.3731 46.4819 11.9341C46.7739 11.6431 46.9419 11.2421 46.9849 10.7291H44.8019V10.0131H47.7139C47.7489 10.1681 47.7599 10.3181 47.7599 10.4631ZM52.3799 7.98005H49.6439V9.86305H52.1099V10.5791H49.6439V12.4611H52.3789V13.1911H48.8689V7.25005H52.3789L52.3799 7.98005ZM55.6399 13.1901H54.8649V7.98005H53.1869V7.25105H57.3179V7.98105H55.6399V13.1911V13.1901ZM60.3079 13.1901V7.25205H61.0809V13.1921L60.3079 13.1901ZM64.5079 13.1901H63.7399V7.98005H62.0559V7.25105H66.1919V7.98105H64.5079V13.1901ZM74.0129 12.4271C73.4209 13.0271 72.6859 13.3271 71.8099 13.3271C70.9299 13.3271 70.1949 13.0271 69.6029 12.4271C69.0109 11.8271 68.7169 11.0921 68.7169 10.2211C68.7169 9.35105 69.0109 8.61505 69.6029 8.01505C70.1949 7.41505 70.9299 7.11505 71.8099 7.11505C72.6809 7.11505 73.4159 7.41505 74.0079 8.02005C74.6049 8.62505 74.8989 9.35505 74.8989 10.2211C74.8989 11.0911 74.6049 11.8271 74.0129 12.4271ZM70.1749 11.9291C70.6209 12.3731 71.1639 12.5961 71.8099 12.5961C72.4519 12.5961 72.9999 12.3731 73.4399 11.9291C73.8849 11.4841 74.1099 10.9131 74.1099 10.2211C74.1099 9.52905 73.8849 8.95805 73.4399 8.51305C73.2284 8.29622 72.9745 8.12515 72.6941 8.01042C72.4138 7.89568 72.1128 7.83974 71.8099 7.84605C71.1639 7.84605 70.6209 8.06905 70.1749 8.51305C69.7299 8.95805 69.5049 9.52905 69.5049 10.2211C69.5049 10.9131 69.7299 11.4841 70.1749 11.9291ZM75.9849 13.1901V7.25205H76.9249L79.8469 11.8721H79.8809L79.8469 10.7301V7.25005H80.6199V13.1901H79.8129L76.7529 8.34305H76.7199L76.7529 9.48905V13.1891L75.9849 13.1901Z" fill="white" stroke="white" strokeWidth="0.625"/>
                                                    <path d="M68.526 21.865C66.172 21.865 64.249 23.635 64.249 26.079C64.249 28.503 66.172 30.292 68.526 30.292C70.886 30.292 72.809 28.502 72.809 26.079C72.809 23.636 70.886 21.865 68.526 21.865ZM68.526 28.633C67.235 28.633 66.123 27.579 66.123 26.079C66.123 24.559 67.235 23.524 68.526 23.524C69.818 23.524 70.935 24.559 70.935 26.079C70.935 27.579 69.818 28.633 68.526 28.633ZM59.193 21.865C56.833 21.865 54.915 23.635 54.915 26.079C54.915 28.503 56.833 30.292 59.193 30.292C61.551 30.292 63.471 28.502 63.471 26.079C63.471 23.636 61.551 21.865 59.193 21.865ZM59.193 28.633C57.9 28.633 56.785 27.579 56.785 26.079C56.785 24.559 57.9 23.524 59.193 23.524C60.485 23.524 61.596 24.559 61.596 26.079C61.596 27.579 60.485 28.633 59.193 28.633ZM48.086 23.156V24.947H52.413C52.286 25.947 51.948 26.683 51.429 27.196C50.798 27.816 49.814 28.503 48.086 28.503C47.4609 28.5064 46.8414 28.3855 46.2634 28.1476C45.6853 27.9096 45.1603 27.5593 44.7187 27.1169C44.2771 26.6745 43.9278 26.1488 43.6909 25.5703C43.4541 24.9918 43.3345 24.3721 43.339 23.747C43.3345 23.122 43.4541 22.5022 43.6909 21.9237C43.9278 21.3453 44.2771 20.8196 44.7187 20.3772C45.1603 19.9347 45.6853 19.5844 46.2634 19.3465C46.8414 19.1085 47.4609 18.9877 48.086 18.991C49.526 18.991 50.574 19.548 51.346 20.268L52.623 19.006C51.543 17.986 50.103 17.202 48.086 17.202C44.436 17.202 41.366 20.138 41.366 23.747C41.366 27.356 44.436 30.292 48.086 30.292C50.06 30.292 51.542 29.653 52.707 28.454C53.901 27.274 54.274 25.614 54.274 24.274C54.274 23.858 54.239 23.476 54.176 23.156H48.086ZM93.502 24.545C93.15 23.602 92.064 21.865 89.851 21.865C87.658 21.865 85.833 23.572 85.833 26.079C85.833 28.439 87.639 30.292 90.061 30.292C90.7616 30.2987 91.453 30.1316 92.0732 29.8056C92.6934 29.4796 93.2232 29.0049 93.615 28.424L92.162 27.467C91.677 28.168 91.016 28.633 90.062 28.633C89.113 28.633 88.432 28.203 87.997 27.356L93.699 25.024L93.502 24.545ZM87.688 25.948C87.639 24.323 88.965 23.491 89.915 23.491C90.659 23.491 91.291 23.858 91.501 24.385L87.688 25.948ZM83.054 30.036H84.928V17.652H83.054V30.036ZM79.984 22.803H79.921C79.5 22.31 78.697 21.865 77.679 21.865C75.544 21.865 73.592 23.717 73.592 26.093C73.592 28.454 75.544 30.292 77.679 30.292C78.697 30.292 79.5 29.842 79.921 29.335H79.984V29.939C79.984 31.55 79.113 32.416 77.708 32.416C76.563 32.416 75.853 31.599 75.559 30.911L73.929 31.584C74.399 32.701 75.643 34.075 77.709 34.075C79.906 34.075 81.76 32.797 81.76 29.688V22.12H79.984V22.803ZM77.84 28.633C76.548 28.633 75.467 27.563 75.467 26.093C75.467 24.608 76.548 23.524 77.84 23.524C79.113 23.524 80.117 24.608 80.117 26.093C80.117 27.563 79.113 28.633 77.84 28.633ZM102.278 17.652H97.795V30.036H99.665V25.343H102.278C104.354 25.343 106.39 23.858 106.39 21.497C106.39 19.137 104.35 17.652 102.278 17.652ZM102.327 23.621H99.664V19.374H102.327C102.899 19.3655 103.451 19.5842 103.862 19.9821C104.273 20.3801 104.51 20.9249 104.52 21.497C104.52 22.455 103.723 23.621 102.327 23.621ZM113.883 21.841C112.533 21.841 111.128 22.431 110.55 23.737L112.21 24.424C112.566 23.737 113.223 23.514 113.917 23.514C114.887 23.514 115.871 24.09 115.886 25.107V25.237C115.547 25.044 114.823 24.757 113.932 24.757C112.145 24.757 110.325 25.73 110.325 27.544C110.325 29.204 111.788 30.272 113.434 30.272C114.692 30.272 115.386 29.712 115.822 29.059H115.886V30.016H117.691V25.266C117.691 23.07 116.032 21.841 113.883 21.841ZM113.658 28.628C113.046 28.628 112.194 28.328 112.194 27.578C112.194 26.62 113.257 26.252 114.177 26.252C115 26.252 115.386 26.432 115.886 26.668C115.739 27.815 114.74 28.628 113.658 28.628ZM124.269 22.112L122.121 27.481H122.057L119.835 22.112H117.819L121.157 29.615L119.252 33.789H121.206L126.349 22.112H124.269ZM107.418 30.036H109.292V17.652H107.418V30.036Z" fill="white"/>
                                                    <path d="M10.6891 7.78204C10.3951 8.08604 10.2241 8.56104 10.2241 9.17504V31.085C10.2241 31.699 10.3941 32.174 10.6891 32.478L10.7621 32.545L23.1841 20.272V19.982L10.7621 7.71004L10.6891 7.78204Z" fill="url(#paint0_linear_17281_13522)"/>
                                                    <path d="M27.3191 24.366L23.1831 20.273V19.983L27.3241 15.892L27.4171 15.945L32.3211 18.702C33.7211 19.484 33.7211 20.772 32.3211 21.56L27.4171 24.313L27.3191 24.366Z" fill="url(#paint1_linear_17281_13522)"/>
                                                    <path d="M27.417 24.312L23.183 20.127L10.688 32.478C11.153 32.961 11.911 33.02 12.773 32.536L27.417 24.312Z" fill="url(#paint2_linear_17281_13522)"/>
                                                    <path d="M27.417 15.9431L12.772 7.71905C11.91 7.24105 11.152 7.29905 10.687 7.78205L23.183 20.1281L27.417 15.9431Z" fill="url(#paint3_linear_17281_13522)"/>
                                                </svg>
                                            </a>
                                        </div>
                                        
                                        <p className="text-sm text-gray-600">The app is ready right now! Try it out</p>
                                    </div>
                                    
                                    {/* Inner Right Column (Image) */}
                                    <div className="flex-1">
                                        <Image
                                            src="/images/download-app.webp"
                                            alt="Download iQIBLA Life App"
                                            width={400}
                                            height={500}
                                            className="w-full h-auto rounded-lg object-contain transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
