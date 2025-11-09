import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CommercialProjects() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const commercialCategories = [
    { id: "all", name: "All Projects" },
    { id: "office", name: "Office Spaces" },
    { id: "retail", name: "Retail" },
    { id: "mixed", name: "Mixed Use" },
    { id: "industrial", name: "Industrial" },
    { id: "hospitality", name: "Hospitality" },
  ];

  const featuredProjects = [
    {
      id: 1,
      name: "Elite Business Park",
      location: "Whitefield, Bangalore",
      type: "Grade A Office Spaces",
      category: "office",
      size: "5,00,000 sq.ft.",
      units: "Customizable Office Spaces",
      price: "₹8,500/sq.ft.",
      status: "Ready to Occupy",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
      highlights: [
        "LEED Platinum Certified",
        "24/7 Power Backup",
        "Smart Building",
        "Ample Parking",
      ],
      description:
        "Premium Grade A office spaces designed for corporates and IT companies with world-class amenities and connectivity.",
      amenities: [
        "High-Speed Elevators",
        "Food Court",
        "Fitness Center",
        "Conference Rooms",
        "Banking",
        "Security",
      ],
      possession: "Immediate",
    },
    {
      id: 2,
      name: "Metro Retail Hub",
      location: "Gachibowli, Hyderabad",
      type: "Shopping Mall & Retail",
      category: "retail",
      size: "3,50,000 sq.ft.",
      units: "Retail Shops & Food Court",
      price: "₹12,000/sq.ft.",
      status: "Under Construction",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
      highlights: [
        "Metro Connectivity",
        "Anchor Tenants",
        "Parking for 500+ cars",
        "Food Court",
      ],
      description:
        "Modern retail destination with premium brands, entertainment zones, and dining options in prime location.",
      amenities: [
        "Central AC",
        "Escalators",
        "Parking",
        "Security",
        "Maintenance",
        "Promotional Support",
      ],
      possession: "Dec 2024",
    },
  ];

  const commercialProjects = [
    {
      id: 3,
      name: "Tech Innovation Center",
      location: "Hinjewadi, Pune",
      type: "IT Park",
      category: "office",
      size: "8,00,000 sq.ft.",
      units: "IT/ITES Spaces",
      price: "₹7,200/sq.ft.",
      status: "Ready to Occupy",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      highlights: [
        "Dedicated IT Infrastructure",
        "Fiber Optic Connectivity",
        "Conference Facilities",
      ],
    },
    {
      id: 4,
      name: "Elite Mall & Residences",
      location: "Gurugram, Delhi-NCR",
      type: "Mixed Use Development",
      category: "mixed",
      size: "12,00,000 sq.ft.",
      units: "Retail + Office + Residential",
      price: "₹15,000/sq.ft.",
      status: "Under Construction",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
      highlights: ["Integrated Complex", "Luxury Retail", "Premium Offices"],
    },
    {
      id: 5,
      name: "Logistics Park",
      location: "Bhiwandi, Mumbai",
      type: "Warehouse & Industrial",
      category: "industrial",
      size: "15,00,000 sq.ft.",
      units: "Warehouse Spaces",
      price: "₹3,500/sq.ft.",
      status: "Ready to Occupy",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      highlights: ["24/7 Operations", "Heavy Power", "Loading Docks"],
    },
    {
      id: 6,
      name: "Business Bay Towers",
      location: "Hitech City, Hyderabad",
      type: "Corporate Offices",
      category: "office",
      size: "6,50,000 sq.ft.",
      units: "Floor-wise Offices",
      price: "₹9,800/sq.ft.",
      status: "Ready to Occupy",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
      highlights: [
        "Panoramic City Views",
        "Premium Finishes",
        "Executive Lounges",
      ],
    },
    {
      id: 7,
      name: "Luxury Hotel & Convention",
      location: "JW Marriott Area, Chennai",
      type: "Hospitality",
      category: "hospitality",
      size: "4,00,000 sq.ft.",
      units: "Hotel & Convention Center",
      price: "₹18,000/sq.ft.",
      status: "Under Construction",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      highlights: ["5-Star Hotel", "Convention Center", "Fine Dining"],
    },
    {
      id: 8,
      name: "High Street Retail",
      location: "Banjara Hills, Hyderabad",
      type: "Luxury Retail",
      category: "retail",
      size: "2,00,000 sq.ft.",
      units: "Premium Retail Spaces",
      price: "₹20,000/sq.ft.",
      status: "Ready to Occupy",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      highlights: ["Luxury Brands", "Valet Parking", "VIP Lounges"],
    },
  ];

  const stats = [
    { number: "50+", label: "Commercial Projects" },
    { number: "25M+", label: "Square Feet Developed" },
    { number: "500+", label: "Corporate Clients" },
    { number: "15+", label: "Cities Presence" },
  ];

  const services = [
    {
      icon: "🏢",
      title: "Office Spaces",
      description:
        "Grade A office buildings with modern amenities and prime locations",
    },
    {
      icon: "🛍️",
      title: "Retail Spaces",
      description:
        "Shopping malls, high street retail, and commercial complexes",
    },
    {
      icon: "🏭",
      title: "Industrial Parks",
      description: "Warehouses, manufacturing units, and logistics parks",
    },
    {
      icon: "🏨",
      title: "Hospitality",
      description: "Hotels, resorts, and convention centers",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? commercialProjects
      : commercialProjects.filter(
          (project) => project.category === activeCategory
        );

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleContactExpert = () => {
    navigate("/residential/ongoing-projects");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}

      {/* <header className="sticky top-0 z-40 bg-white/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            to="/residential/ongoing-projects"
            className="flex items-center"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow">
              <span className="text-white font-bold">E</span>
            </div>
            <span className="ml-3 text-xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              EliteHomes
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/residential/ongoing-projects"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white"
            >
              Back to home
            </Link>
          </nav>
        </div>
      </header> */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur">
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
              onClick={() => navigate("/residential/ongoing-projects")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Commercial Projects
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Premium commercial spaces designed for business success. Offices,
            retail, industrial, and mixed-use developments.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in-up">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Commercial Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Commercial Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === "Ready to Occupy"
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
                  <p className="text-gray-600 text-sm mb-3 flex items-center">
                    <span className="mr-1">📍</span>
                    {project.location}
                  </p>
                  <p className="text-gray-700 font-medium mb-3">
                    {project.type}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600">Total Area</div>
                      <div className="font-semibold text-gray-900">
                        {project.size}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Price</div>
                      <div className="font-semibold text-gray-900">
                        {project.price}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.highlights.slice(0, 3).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleViewDetails(project)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                  >
                    View Project Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore All Commercial Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our diverse portfolio of commercial properties across
              different categories and locations.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {commercialCategories.map((category) => (
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Ready to Occupy"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 flex items-center">
                    <span className="mr-1">📍</span>
                    {project.location}
                  </p>
                  <p className="text-gray-700 font-medium mb-3 text-sm">
                    {project.type}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                      <div className="text-xs text-gray-600">Area</div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {project.size}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600">Price</div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {project.price}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleViewDetails(project)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Expand Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect commercial space for your business
            growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContactExpert}
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              Consult Commercial Expert
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Download Portfolio
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
                Premium commercial real estate solutions for businesses of all
                sizes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Commercial Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Office Spaces
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Retail Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Industrial Parks
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mixed Use
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Residential
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +91 98222 11110</li>
                <li>✉️ commercial@elitehomes.com</li>
                <li>📍 Major Cities Across India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EliteHomes Commercial. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedProject.name}
                  </h3>
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-1">📍</span>
                    {selectedProject.location}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    selectedProject.status === "Ready to Occupy"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {selectedProject.status}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Project Details
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property Type</span>
                      <span className="font-semibold">
                        {selectedProject.type}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Area</span>
                      <span className="font-semibold">
                        {selectedProject.size}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price</span>
                      <span className="font-semibold">
                        {selectedProject.price}
                      </span>
                    </div>
                    {selectedProject.possession && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Possession</span>
                        <span className="font-semibold">
                          {selectedProject.possession}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {selectedProject.description && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Description
                  </h4>
                  <p className="text-gray-600">{selectedProject.description}</p>
                </div>
              )}

              {selectedProject.amenities && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Amenities
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {selectedProject.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span className="text-gray-600 text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Schedule Site Visit
                </button>
                <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommercialProjects;
