export default function Home() {
  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Welcome to iQibla E-commerce
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Your trusted source for premium Islamic lifestyle products and accessories
        </p>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sample category cards */}
          {['Prayer Essentials', 'Digital Qibla', 'Islamic Fashion'].map((category) => (
            <div key={category} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{category}</h3>
              <p className="text-gray-600">Explore our collection</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
