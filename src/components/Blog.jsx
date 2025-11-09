import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Blog() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  const blogCategories = [
    { id: 'all', name: 'All Articles' },
    { id: 'market', name: 'Market Trends' },
    { id: 'investment', name: 'Investment Tips' },
    { id: 'home', name: 'Home Buying' },
    { id: 'legal', name: 'Legal Guide' },
    { id: 'luxury', name: 'Luxury Living' }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "2024 Real Estate Market Outlook: What to Expect",
      excerpt: "Analysis of upcoming trends, price movements, and investment opportunities in the Indian real estate market.",
      category: "market",
      readTime: "8 min read",
      date: "Nov 8, 2024",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "The Ultimate Guide to RERA: Protecting Home Buyers",
      excerpt: "Everything you need to know about RERA regulations and how they safeguard your real estate investments.",
      category: "legal",
      readTime: "6 min read",
      date: "Nov 5, 2024",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
      featured: true
    }
  ];

  const blogPosts = [
    {
      id: 3,
      title: "5 Essential Factors to Consider Before Buying Your First Home",
      excerpt: "From location to budget, here are the key factors that every first-time home buyer should evaluate.",
      category: "home",
      readTime: "5 min read",
      date: "Nov 3, 2024",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Luxury Apartments vs Independent Villas: Which is Better?",
      excerpt: "A comprehensive comparison to help you choose between luxury apartments and independent villas.",
      category: "luxury",
      readTime: "7 min read",
      date: "Oct 30, 2024",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Real Estate Investment Strategies for Maximum Returns",
      excerpt: "Expert strategies to maximize your returns in the competitive real estate market.",
      category: "investment",
      readTime: "10 min read",
      date: "Oct 28, 2024",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Understanding Home Loans: A Complete Guide for 2024",
      excerpt: "Navigate the complexities of home loans with our comprehensive guide to interest rates and eligibility.",
      category: "home",
      readTime: "9 min read",
      date: "Oct 25, 2024",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2111&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "The Rise of Smart Homes: Technology in Modern Living",
      excerpt: "How smart home technology is transforming the way we live and what to look for in a smart home.",
      category: "luxury",
      readTime: "6 min read",
      date: "Oct 22, 2024",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "Property Registration Process: Step-by-Step Guide",
      excerpt: "A detailed walkthrough of the property registration process and important documents required.",
      category: "legal",
      readTime: "8 min read",
      date: "Oct 18, 2024",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const popularPosts = [
    {
      id: 9,
      title: "Top 5 Emerging Real Estate Markets in India 2024",
      excerpt: "Discover the fastest-growing real estate markets that offer great investment potential.",
      category: "investment",
      readTime: "5 min read",
      date: "Oct 15, 2024",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 10,
      title: "Sustainable Living: Green Buildings and Their Benefits",
      excerpt: "Learn about green building certifications and how they contribute to sustainable living.",
      category: "luxury",
      readTime: "7 min read",
      date: "Oct 12, 2024",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handleReadMore = (postId) => {
    // Navigate to individual blog post page
    console.log('Reading post:', postId);
    // navigate(`/blog/${postId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                EliteHomes
              </span>
            </div>
            <button 
              onClick={() => navigate('/home')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Blog Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">EliteHomes Blog</h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Expert insights, market trends, and valuable tips for your real estate journey
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button 
                    onClick={() => handleReadMore(post.id)}
                    className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center gap-2"
                  >
                    Read More
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 mb-8">
                {blogCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg border-transparent"
                        : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-purple-600 px-2 py-1 rounded-full text-xs font-semibold">
                          {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-500 text-sm">{post.date}</span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                        {post.excerpt}
                      </p>
                      <button 
                        onClick={() => handleReadMore(post.id)}
                        className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center gap-2 text-sm"
                      >
                        Read More
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Popular Posts */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <div key={post.id} className="flex gap-3 group cursor-pointer">
                      <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-gray-500 text-xs mt-1">
                          <span>{post.date}</span>
                          <span className="mx-1">•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {blogCategories.slice(1).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                        activeCategory === category.id
                          ? 'bg-purple-100 text-purple-700 font-semibold'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-purple-100 text-sm mb-4">
                  Get the latest real estate insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Personalized Real Estate Advice?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our experts are here to help you make informed decisions about your property investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Consult Our Experts
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Download Free Guide
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">E</span>
                </div>
                <span className="ml-2 text-xl font-bold">EliteHomes</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner in finding the perfect home and making smart real estate investments.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Properties</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Blog Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Market Trends</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investment Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Home Buying</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal Guide</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +91 98765 43210</li>
                <li>✉️ blog@elitehomes.com</li>
                <li>📍 Across India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EliteHomes Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Blog;