import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

// Amenities data with icons and categories
const amenitiesData = {
  "Swimming Pool": { icon: "🏊", category: "Recreation" },
  "Gym": { icon: "💪", category: "Fitness" },
  "Clubhouse": { icon: "🏛️", category: "Community" },
  "24/7 Security": { icon: "👮", category: "Security" },
  "Children's Play Area": { icon: "🧒", category: "Family" },
  "Landscaped Gardens": { icon: "🌳", category: "Green Space" },
  "Power Backup": { icon: "⚡", category: "Utilities" },
  "Water Supply": { icon: "💧", category: "Utilities" },
  "Parking": { icon: "🅿️", category: "Parking" },
  "Lift": { icon: "🛗", category: "Accessibility" },
  "Fire Safety": { icon: "🚒", category: "Safety" },
  "Rain Water Harvesting": { icon: "🌧️", category: "Eco-Friendly" },
  "Private Garden": { icon: "🏡", category: "Private" },
  "Home Theater": { icon: "🎬", category: "Entertainment" },
  "Modular Kitchen": { icon: "👨‍🍳", category: "Kitchen" },
  "Wooden Flooring": { icon: "🪵", category: "Interior" },
  "Concierge Service": { icon: "🎩", category: "Services" },
  "Clear Title": { icon: "📄", category: "Legal" },
  "Approved Layout": { icon: "📐", category: "Legal" },
  "Road Access": { icon: "🛣️", category: "Infrastructure" },
  "Drainage": { icon: "🚰", category: "Infrastructure" },
  "Electricity": { icon: "💡", category: "Utilities" },
  "WiFi": { icon: "📶", category: "Connectivity" },
  "Housekeeping": { icon: "🧹", category: "Services" },
  "Private Terrace": { icon: "🌅", category: "Private" },
  "Jacuzzi": { icon: "🛁", category: "Luxury" },
  "Home Automation": { icon: "🤖", category: "Smart Home" },
  "Private Lift": { icon: "🛗", category: "Luxury" },
  "Wine Cellar": { icon: "🍷", category: "Luxury" },
  "Servant Quarter": { icon: "👨‍💼", category: "Services" },
  "Park": { icon: "🌲", category: "Green Space" },
  "Cafeteria": { icon: "☕", category: "Food & Beverage" },
  "Car Parking": { icon: "🚗", category: "Parking" },
  "Solar Panels": { icon: "☀️", category: "Eco-Friendly" },
  "Gated Community": { icon: "🏘️", category: "Security" },
  "Basketball Court": { icon: "🏀", category: "Sports" },
  "Tennis Court": { icon: "🎾", category: "Sports" },
  "Yoga Studio": { icon: "🧘", category: "Wellness" },
  "Spa": { icon: "💆", category: "Wellness" },
  "Business Center": { icon: "💼", category: "Business" },
  "Conference Room": { icon: "📊", category: "Business" },
  "Library": { icon: "📚", category: "Education" },
  "Pet Park": { icon: "🐕", category: "Pets" },
  "Jogging Track": { icon: "🏃", category: "Fitness" },
  "Barbecue Area": { icon: "🍖", category: "Recreation" }
};

function ProjectDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { property } = location.state || {};
  const [showContactForm, setShowContactForm] = useState(false);
  const [currentAmenitySlide, setCurrentAmenitySlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // If no property data is passed, redirect to home
  if (!property) {
    React.useEffect(() => {
      navigate('/');
    }, [navigate]);
    return null;
  }

  // Group amenities by category
  const groupedAmenities = property.amenities?.reduce((acc, amenity) => {
    const amenityInfo = amenitiesData[amenity] || { icon: "⭐", category: "General" };
    if (!acc[amenityInfo.category]) {
      acc[amenityInfo.category] = [];
    }
    acc[amenityInfo.category].push({ name: amenity, ...amenityInfo });
    return acc;
  }, {});

  // Get all amenity categories
  const amenityCategories = groupedAmenities ? Object.keys(groupedAmenities) : [];
  const amenitiesPerSlide = 6;

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success('Thank you! Our agent will contact you shortly.', {
      duration: 4000,
      position: 'top-center',
    });
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setShowContactForm(false);
  };

  // Format price function
  const formatPrice = (n) =>
    "₹ " +
    (n || 0)
      .toString()
      .replace(/\B(?=(\d{2})+(?!\d))/g, ",")
      .replace(/,(\d{3})(?=,|$)/g, ",$1");

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Toaster />
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
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
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Property Details */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Property Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-96">
            <img 
              src={property.img} 
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 flex gap-2">
              {property.rera && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  RERA Approved
                </span>
              )}
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                property.status === "Ready-to-Move" ? "bg-purple-100 text-purple-800" :
                property.status === "Under-Construction" ? "bg-amber-100 text-amber-800" :
                "bg-pink-100 text-pink-800"
              }`}>
                {property.status}
              </span>
            </div>
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{property.title}</h1>
            <div className="flex items-center text-gray-600 mb-6">
              <span className="mr-2">📍</span>
              {property.locality}, {property.city}
            </div>

            {/* Main Content Grid - Property Details + CTA Side by Side */}
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {/* Property Details - Takes 2/3 space */}
              <div className="lg:col-span-2 space-y-8">
                {/* Price and Configuration */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                    <div className="text-3xl font-bold text-gray-900">{formatPrice(property.price)}</div>
                    <div className="text-gray-600 mt-2">Total Price</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                    <div className="text-3xl font-bold text-gray-900">₹{property.perSqft?.toLocaleString()}/sqft</div>
                    <div className="text-gray-600 mt-2">Price per sqft</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                    <div className="text-3xl font-bold text-gray-900">{property.bhk === "-" ? "Plot" : `${property.bhk} BHK`}</div>
                    <div className="text-gray-600 mt-2">Configuration</div>
                  </div>
                </div>

                {/* Property Details Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Property Details</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Carpet Area</span>
                        <span className="font-semibold text-gray-900">{property.carpet} sqft</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Super Built-up Area</span>
                        <span className="font-semibold text-gray-900">{property.sba} sqft</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Builder</span>
                        <span className="font-semibold text-gray-900">{property.builder}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Possession</span>
                        <span className="font-semibold text-gray-900">{property.possession}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Property Type</span>
                        <span className="font-semibold text-gray-900">{property.type}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Distance from Key Locations</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Nearest Metro</span>
                        <span className="font-semibold text-gray-900">{property.distance.metro_km} km</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">IT Park</span>
                        <span className="font-semibold text-gray-900">{property.distance.itpark_km} km</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">Schools</span>
                        <span className="font-semibold text-gray-900">{property.distance.school_km} km</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section - Takes 1/3 space */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white h-fit sticky top-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Interested in this Property?</h3>
                  <p className="text-purple-100 text-sm">Get instant callback from our expert</p>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                    <span>📅</span>
                    Schedule Site Visit
                  </button>
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="w-full border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>👨‍💼</span>
                    Contact Agent
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-sm text-purple-200 mb-2">Need immediate assistance?</div>
                    <div className="font-semibold text-lg">+91 98000 40000</div>
                    <div className="text-xs text-purple-200 mt-1">Available 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description & Amenities */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Description</h3>
            <p className="text-gray-600 leading-relaxed">{property.description}</p>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Floor Plan</h4>
              <p className="text-gray-600">{property.floorPlan}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Premium Amenities</h3>
            
            {/* Amenities Slides */}
            <div className="relative">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {property.amenities?.slice(
                  currentAmenitySlide * amenitiesPerSlide,
                  (currentAmenitySlide + 1) * amenitiesPerSlide
                ).map((amenity, index) => {
                  const amenityInfo = amenitiesData[amenity] || { icon: "⭐", category: "General" };
                  return (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="text-2xl mb-2">{amenityInfo.icon}</div>
                      <div className="text-sm font-medium text-gray-800">{amenity}</div>
                      <div className="text-xs text-gray-500 mt-1">{amenityInfo.category}</div>
                    </div>
                  );
                })}
              </div>

              {/* Slide Indicators */}
              {property.amenities && property.amenities.length > amenitiesPerSlide && (
                <div className="flex justify-center space-x-2 mb-6">
                  {Array.from({ 
                    length: Math.ceil(property.amenities.length / amenitiesPerSlide) 
                  }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentAmenitySlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentAmenitySlide 
                          ? 'bg-purple-600 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Amenities by Category */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-3">Amenities by Category</h4>
                {groupedAmenities && Object.entries(groupedAmenities).map(([category, amenities]) => (
                  <div key={category} className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-semibold text-gray-800 mb-2">{category}</h5>
                    <div className="flex flex-wrap gap-2">
                      {amenities.map((amenity, index) => (
                        <span 
                          key={index}
                          className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                        >
                          <span className="mr-1">{amenity.icon}</span>
                          {amenity.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Agent Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Contact Agent</h3>
              <button 
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;