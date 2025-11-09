import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const slides = [
    {
      title: "Elevate Your Living Experience",
      subtitle: "Discover premium properties with unmatched luxury and comfort",
      background:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop",
      cta: "Get Started",
    },
    {
      title: "Smart Modern Living",
      subtitle: "Innovative designs with cutting-edge technology and amenities",
      background:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
      cta: "Explore Properties",
    },
    {
      title: "Your Dream Home Awaits",
      subtitle: "Premium locations with excellent connectivity and lifestyle",
      background:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
      cta: "View Projects",
    },
  ];

  const projects = [
    {
      name: "Skyline Residences",
      code: "TWR-A 25F",
      location: "Downtown Financial District",
      features: [
        "Smart Home",
        "Pool",
        "Gym",
        "Security",
        "Parking",
        "Concierge",
      ],
      price: "₹2.5 Cr - ₹4.8 Cr",
      background:
        "https://plus.unsplash.com/premium_photo-1661913412680-c274b6fea096?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      status: "Ready to Move",
    },
    {
      name: "Lakeview Estates",
      code: "LV-E 15",
      type: "Waterfront Villas",
      features: [
        "Lake View",
        "Private Dock",
        "Landscaped Gardens",
        "Premium Amenities",
      ],
      specs: ["4-5 BHK", "2800-3500 sq.ft.", "₹3.5 Cr - ₹5.8 Cr"],
      background:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
      status: "Ready to Move",
    },
    {
      name: "Heritage Homes",
      code: "HH-F 07",
      type: "Classic Villas",
      features: [
        "Traditional Architecture",
        "Spacious Layouts",
        "Green Spaces",
        "Community Living",
      ],
      specs: ["3-4 BHK", "2000-2800 sq.ft.", "₹2.2 Cr - ₹3.8 Cr"],
      background:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
      status: "Ready to Move",
    },
  ];

  const features = [
    {
      icon: "🔐",
      title: "Secure Investment",
      description: "RERA approved projects with transparent pricing",
    },
    {
      icon: "⭐",
      title: "Premium Quality",
      description: "High-quality construction with premium materials",
    },
    {
      icon: "📍",
      title: "Prime Locations",
      description: "Strategic locations with excellent connectivity",
    },
    {
      icon: "🏊",
      title: "Luxury Amenities",
      description: "World-class amenities for modern living",
    },
  ];

  const stats = [
    { number: "250+", label: "Happy Families" },
    { number: "35+", label: "Projects Completed" },
    { number: "12+", label: "Cities" },
    { number: "98%", label: "Customer Satisfaction" },
  ];

  const teamMembers = [
    {
      name: "Aarav Sharma",
      role: "Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
      description: "20+ years in real estate development",
    },
    {
      name: "Priya Patel",
      role: "Head of Sales",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1000&auto=format&fit=crop",
      description: "Expert in luxury property sales",
    },
    {
      name: "Rohan Mehta",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
      description: "Specialized in premium constructions",
    },
  ];

  const contactNumbers = [
    { city: "Chennai", number: "99333 44444" },
    { city: "Coimbatore", number: "72999 70000" },
    { city: "Bangalore", number: "98888 00062" },
    { city: "Delhi", number: "73388 60000" },
    { city: "Hyderbad", number: "70001 30006" },
    { city: "Pune", number: "81100 38888" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleGetStarted = () => {
    navigate("/residential/ongoing-projects");
  };

  const handleViewDetails = () => {
    navigate("/residential/ongoing-projects");
  };

  return (
    <div className="min-h-screen bg-white">
      
      <nav className="fixed w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="ml-3 text-2xl font-bold text-white">
                EliteHomes
              </span>
            </div>

          
            <div className="hidden md:flex items-center space-x-4">
              
              <div className="relative">
                <button
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="font-semibold backdrop-blur-sm text-black-600 px-6 py-2 rounded-full border border-purple-600 hover:border-pink-600 transition-all duration-300 flex items-center gap-2"
                >
                  Contact Us
                  <span
                    className={`text-pink-600 transform transition-transform ${
                      isContactOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                
                {isContactOpen && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                    <div className="p-6">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-gray-900">
                          CALL US
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        {contactNumbers.map((contact, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                          >
                            <span className="text-gray-700 font-medium">
                              {contact.city}
                            </span>
                            <span className="text-gray-900 font-bold">
                              {contact.number}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 font-semibold"
              >
                Get Start
              </button>
            </div>

            
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-white transition-all ${
                    isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-white transition-all ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-white transition-all ${
                    isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              <div className="flex flex-col space-y-4">
                
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-3 text-center">
                    CALL US
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {contactNumbers.slice(0, 4).map((contact, index) => (
                      <div
                        key={index}
                        className="flex justify-between text-sm text-white"
                      >
                        <span>{contact.city}</span>
                        <span className="font-semibold">{contact.number}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={handleGetStarted}
                  className="bg-white text-gray-900 px-6 py-2 rounded-full w-full font-semibold"
                >
                  Get
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.background})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
            </div>

            <div className="relative h-full flex items-center justify-center text-center text-white pt-16">
              <div className="max-w-4xl mx-auto px-4 transform transition-all duration-1000 ease-out">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
                  {slide.subtitle}
                </p>
                <button
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-400 shadow-2xl"
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}

        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      
      <section
        id="features"
        className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose EliteHomes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We redefine luxury living with exceptional quality, prime
              locations, and unmatched customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section
        id="projects"
        className="py-20 bg-gradient-to-br from-blue-50 to-pink-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our successfully delivered premium residential properties
              that have set new benchmarks in luxury living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
               
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${project.background})` }}
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.code}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Ready to Move"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.name}
                  </h3>

                  {project.location && (
                    <p className="text-gray-600 text-sm mb-3 flex items-center">
                      <span className="mr-1">📍</span>
                      {project.location}
                    </p>
                  )}

                  {project.type && (
                    <p className="text-gray-700 font-medium mb-3">
                      {project.type}
                    </p>
                  )}

                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  
                  <div className="border-t pt-3">
                    {project.price ? (
                      <div className="text-purple-600 font-bold text-lg">
                        {project.price}
                      </div>
                    ) : (
                      <div className="space-y-1">
                        {project.specs.map((spec, idx) => (
                          <div key={idx} className="text-sm text-gray-600">
                            {spec}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleViewDetails}
                    className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              View All
            </button>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About EliteHomes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 15 years of excellence in real estate, we have been
              transforming dreams into reality by creating exceptional living
              spaces that redefine luxury and comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story & Vision
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2009, EliteHomes began with a simple vision: to
                create extraordinary living experiences that combine innovative
                design, premium quality, and sustainable practices.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Today, we stand as one of India's most trusted real estate
                developers, having delivered over 35 premium projects across 12+
                cities, touching the lives of 250+ happy families.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600">35+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
                alt="About EliteHomes"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm">Customer Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our experienced team of professionals is dedicated to delivering
              exceptional quality and service in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 p-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-purple-100"
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <div className="text-purple-600 font-semibold mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect home
            with us. Schedule a site visit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Get Started Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">E</span>
                </div>
                <span className="ml-2 text-xl font-bold">EliteHomes</span>
              </div>
              <p className="text-gray-400">
                Redefining luxury living through innovative design and
                exceptional service.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#projects"
                    className="hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +1 (555) 123-0007</li>
                <li>✉️ hello@elitehomes.com</li>
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

    
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
}

export default LandingPage;
