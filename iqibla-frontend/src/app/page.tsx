import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Welcome to iQibla Indonesia - Your Journey of Zikr Starts Here
                </h1>
                
                <p className="text-xl text-gray-600 mb-8">
                    Discover our innovative iQibla Zikr Ring - a beautiful blend of tradition and technology.
                    Designed to enhance your spiritual journey with elegant craftsmanship and mindful functionality.
                    Perfect for maintaining your daily zikr practice with grace and convenience.
                </p>

                <Link 
                    href="/shop"
                    className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
                >
                    Shop Now
                </Link>
            </div>
        </div>
    );
}