import React from "react";

function About() {
  const features = [
    {
      icon: "📚",
      title: "Vast Collection",
      description: "Discover over 10,000+ books across all genres and categories",
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Swift and reliable delivery service to your doorstep",
    },
    {
      icon: "💰",
      title: "Affordable Prices",
      description: "Best prices on books with frequent discounts and offers",
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      description: "Safe and secure payment gateway for your peace of mind",
    },
  ];

  const stats = [
    { number: "10K+", label: "Books Available" },
    { number: "50K+", label: "Happy Customers" },
    { number: "100+", label: "Authors" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      {/* Hero Section */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-20 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-pink-500">Book Store</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Your ultimate destination for discovering, learning, and connecting through the power of books
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-gray-50 dark:bg-slate-800 py-12 sm:py-16 md:py-20">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Founded in 2020, BookStore began with a simple mission: to make quality books accessible to everyone. What started as a small online platform has grown into a thriving community of book lovers from around the world.
              </p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                We believe that books have the power to transform lives, inspire minds, and connect people across cultures. Every book in our collection is carefully curated to ensure quality and diversity.
              </p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Today, we're proud to serve thousands of customers and support hundreds of authors in their journey to share their stories with the world.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-200 to-pink-100 dark:from-pink-900 dark:to-pink-800 rounded-lg p-8 sm:p-12">
                <div className="text-center">
                  <p className="text-5xl sm:text-6xl mb-4">📖</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-pink-600 dark:text-pink-300">Since 2020</h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm sm:text-base">Connecting readers & authors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">Our Mission & Vision</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="border-2 border-pink-200 dark:border-pink-900 rounded-lg p-6 sm:p-8">
            <div className="text-4xl sm:text-5xl mb-4">🎯</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              To be the most trusted online bookstore that provides easy access to quality books at affordable prices, while creating a vibrant community of readers and authors.
            </p>
          </div>

          {/* Vision */}
          <div className="border-2 border-pink-200 dark:border-pink-900 rounded-lg p-6 sm:p-8">
            <div className="text-4xl sm:text-5xl mb-4">✨</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              To create a world where reading is accessible to everyone, where knowledge flows freely, and where every book lover can find their next favorite story easily.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 dark:bg-slate-800 py-12 sm:py-16 md:py-20">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 rounded-lg p-6 sm:p-8 text-center shadow-md hover:shadow-lg transition">
                <div className="text-4xl sm:text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">By The Numbers</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-500 mb-2">
                {stat.number}
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 dark:bg-slate-800 py-12 sm:py-16 md:py-20">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">Our Team</h2>
          
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
            We are a passionate team of book enthusiasts, developers, and designers working together to create the best online bookstore experience for our customers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Sumit Tiwari", role: "Founder & CEO", emoji: "👨‍💼" },
              { name: "Sarah Johnson", role: "Head of Operations", emoji: "👩‍💼" },
              { name: "Mike Davis", role: "Lead Developer", emoji: "👨‍💻" },
            ].map((member, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 rounded-lg p-6 sm:p-8 text-center shadow-md hover:shadow-lg transition">
                <div className="text-5xl sm:text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Integrity", description: "We believe in transparency and honesty in all our dealings" },
            { title: "Excellence", description: "We strive for excellence in every book and service we provide" },
            { title: "Community", description: "We foster a vibrant community of readers and book lovers" },
          ].map((value, index) => (
            <div key={index} className="border-l-4 border-pink-500 pl-6 py-4">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{value.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of happy readers and discover your next favorite book today
          </p>
          <a
            href="/course"
            className="inline-block bg-white text-pink-500 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold hover:bg-gray-100 transition text-sm sm:text-base"
          >
            Browse Books
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
