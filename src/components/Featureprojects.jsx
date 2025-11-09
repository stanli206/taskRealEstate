import React, { useState } from 'react';

function Featureprojects() {
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showSiteVisitForm, setShowSiteVisitForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const projectCategories = [
    { id: 'all', name: 'All Projects', count: 24 },
    { id: 'upcoming', name: 'Upcoming Projects', count: 6 },
    { id: 'ongoing', name: 'Ongoing Projects', count: 8 },
    { id: 'completed', name: 'Completed Projects', count: 5 },
    { id: 'land', name: 'Land/Plots', count: 5 }
  ];

  const sortOptions = [
    { id: 'newest', name: 'Newest' },
    { id: 'price-low', name: 'Price ↑' },
    { id: 'price-high', name: 'Price ↓' },
    { id: 'sqft', name: '₹/sqft' }
  ];

  const projects = [
    {
      id: 1,
      name: "Skyline Towers",
      type: "upcoming",
      price: "₹2.8 Cr",
      priceValue: 28000000,
      sqft: "₹12,500/sqft",
      sqftValue: 12500,
      location: "Downtown District",
      area: "2240 sqft",
      bhk: "3 BHK",
      status: "Launching Soon",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
      specs: ["Swimming Pool", "Gym", "Clubhouse", "24/7 Security", "Park"],
      description: "Premium residential towers with panoramic city views and luxury amenities."
    },
    {
      id: 2,
      name: "Green Valley Residences",
      type: "ongoing",
      price: "₹1.9 Cr",
      priceValue: 19000000,
      sqft: "₹9,800/sqft",
      sqftValue: 9800,
      location: "Suburban Area",
      area: "1938 sqft",
      bhk: "2.5 BHK",
      status: "Under Construction",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      specs: ["Garden", "Play Area", "Power Backup", "Water Supply", "Parking"],
      description: "Eco-friendly residences surrounded by greenery and modern facilities."
    },
    {
      id: 3,
      name: "Lakeview Apartments",
      type: "completed",
      price: "₹3.2 Cr",
      priceValue: 32000000,
      sqft: "₹14,200/sqft",
      sqftValue: 14200,
      location: "Waterfront",
      area: "2253 sqft",
      bhk: "4 BHK",
      status: "Ready to Move",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
      specs: ["Lake View", "Private Balcony", "Modular Kitchen", "Wooden Flooring", "Concierge"],
      description: "Luxury apartments with stunning lake views and premium finishes."
    },
    {
      id: 4,
      name: "Tech Park Plots",
      type: "land",
      price: "₹75 L",
      priceValue: 7500000,
      sqft: "₹3,500/sqft",
      sqftValue: 3500,
      location: "IT Corridor",
      area: "2142 sqft",
      bhk: "Plot",
      status: "Available",
      image: "https://images.unsplash.com/photo-1598928506311-bf1256de7b3b?q=80&w=2070&auto=format&fit=crop",
      specs: ["Clear Title", "Approved Layout", "Road Access", "Drainage", "Electricity"],
      description: "Premium plots in developing IT corridor with excellent appreciation potential."
    },
    {
      id: 5,
      name: "Royal Gardens",
      type: "upcoming",
      price: "₹4.5 Cr",
      priceValue: 45000000,
      sqft: "₹16,000/sqft",
      sqftValue: 16000,
      location: "Prime Location",
      area: "2812 sqft",
      bhk: "5 BHK",
      status: "Pre Launch",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
      specs: ["Private Garden", "Pool", "Home Theater", "Smart Home", "Servant Quarter"],
      description: "Ultra-luxury villas with private gardens and exclusive amenities."
    },
    {
      id: 6,
      name: "Urban Lofts",
      type: "ongoing",
      price: "₹1.2 Cr",
      priceValue: 12000000,
      sqft: "₹8,500/sqft",
      sqftValue: 8500,
      location: "City Center",
      area: "1411 sqft",
      bhk: "2 BHK",
      status: "60% Completed",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070&auto=format&fit=crop",
      specs: ["High Ceilings", "Open Layout", "City Views", "Modern Design", "Balcony"],
      description: "Contemporary lofts with industrial design elements in heart of the city."
    }
  ];

  const marketPrices = [
    { location: "Downtown", price: "₹15,000/sqft", trend: "up" },
    { location: "Suburbs", price: "₹9,500/sqft", trend: "stable" },
    { location: "IT Corridor", price: "₹11,200/sqft", trend: "up" },
    { location: "Waterfront", price: "₹18,000/sqft", trend: "up" },
    { location: "Industrial Zone", price: "₹6,800/sqft", trend: "stable" }
  ];

  const filteredProjects = projects
    .filter(project => activeTab === 'all' || project.type === activeTab)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.priceValue - b.priceValue;
        case 'price-high': return b.priceValue - a.priceValue;
        case 'sqft': return b.sqftValue - a.sqftValue;
        default: return 0;
      }
    });

  const handleEnquiry = (project) => {
    setSelectedProject(project);
    setShowEnquiryForm(true);
  };

  const handleSiteVisit = (project) => {
    setSelectedProject(project);
    setShowSiteVisitForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowEnquiryForm(false);
    setShowSiteVisitForm(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Featured Projects</h1>
          <p className="text-lg text-gray-600">Discover premium properties with exceptional value and lifestyle</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {projectCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Sort Options */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <span className="text-gray-700 font-medium">Sort by:</span>
            <div className="flex flex-wrap gap-2">
              {sortOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => setSortBy(option.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    sortBy === option.id
                      ? 'bg-pink-100 text-pink-700 border border-pink-200'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>

          <div className="text-sm text-gray-600">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.type === 'upcoming' ? 'bg-amber-100 text-amber-800' :
                    project.type === 'ongoing' ? 'bg-purple-100 text-purple-800' :
                    project.type === 'completed' ? 'bg-green-100 text-green-800' :
                    'bg-pink-100 text-pink-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-3 flex items-center">
                  <span className="mr-1">📍</span>
                  {project.location}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{project.price}</div>
                    <div className="text-sm text-gray-600">{project.sqft}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">{project.area}</div>
                    <div className="text-sm text-gray-600">{project.bhk}</div>
                  </div>
                </div>

                {/* Specifications */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.specs.slice(0, 3).map((spec, idx) => (
                      <span key={idx} className="bg-pink-50 text-pink-700 px-2 py-1 rounded text-xs">
                        {spec}
                      </span>
                    ))}
                    {project.specs.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{project.specs.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleEnquiry(project)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Enquire Now
                  </button>
                  <button 
                    onClick={() => handleSiteVisit(project)}
                    className="flex-1 border border-purple-600 text-purple-600 py-2 px-4 rounded-lg hover:bg-pink-50 transition-colors"
                  >
                    Site Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market Price Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Current Market Prices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {marketPrices.map((item, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-lg font-semibold text-gray-900">{item.location}</div>
                <div className="text-2xl font-bold text-pink-600 my-2">{item.price}</div>
                <div className={`text-sm font-medium ${
                  item.trend === 'up' ? 'text-green-600' : 'text-gray-600'
                }`}>
                  {item.trend === 'up' ? '↗ Rising' : '→ Stable'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specification Guide */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Property Specifications Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Construction Quality</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Premium quality materials with 10+ years structural warranty
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Earthquake resistant design as per latest standards
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Fire safety systems with modern detection equipment
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Amenities & Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Smart home automation with energy efficient systems
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Landscaped gardens with recreational facilities
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  24/7 security with CCTV surveillance and access control
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Form Modal */}
      {showEnquiryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enquire About {selectedProject?.name}</h3>
            <p className="text-gray-600 mb-6">Our team will contact you with detailed information</p>
            
            <form onSubmit={handleFormSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Any specific requirements..."
                  ></textarea>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button 
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Submit Enquiry
                </button>
                <button 
                  type="button"
                  onClick={() => setShowEnquiryForm(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Site Visit Form Modal */}
      {showSiteVisitForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Schedule Site Visit</h3>
            <p className="text-gray-600 mb-6">Book your visit to {selectedProject?.name}</p>
            
            <form onSubmit={handleFormSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>02:00 PM</option>
                    <option>03:00 PM</option>
                    <option>04:00 PM</option>
                  </select>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button 
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Book Site Visit
                </button>
                <button 
                  type="button"
                  onClick={() => setShowSiteVisitForm(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
          <div className="flex items-center">
            <span className="text-lg mr-2">✓</span>
            <span>Thank you! We'll contact you soon.</span>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="ml-3 text-2xl font-bold">EliteHomes</span>
              </div>
              <p className="text-gray-400">
                Creating exceptional living experiences through innovative real estate solutions.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +1 (555) 123-4567</li>
                <li>✉️ info@EliteHomes.com</li>
                <li>📍 Premium Locations Worldwide</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EliteHomes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Featureprojects;
