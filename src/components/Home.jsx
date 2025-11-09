import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/** ---------------------------
 *  Utilities & Mock Data
 *  ---------------------------
 */
const formatPrice = (n) =>
  "₹ " +
  (n || 0)
    .toString()
    .replace(/\B(?=(\d{2})+(?!\d))/g, ",")
    .replace(/,(\d{3})(?=,|$)/g, ",$1");

const cities = [
  "Chennai",
  "Bengaluru",
  "Hyderabad",
  "Pune",
  "Mumbai",
  "Delhi-NCR",
];

const propertyTypes = ["Apartment", "Villa", "Plot", "Penthouse", "Studio"];

const quickBudgets = [
  { label: "< ₹50L", min: 0, max: 50_00_000 },
  { label: "₹50L–₹1Cr", min: 50_00_000, max: 1_00_00_000 },
  { label: "₹1–2Cr", min: 1_00_00_000, max: 2_00_00_000 },
  { label: "₹2Cr+", min: 2_00_00_000, max: 99_00_00_000 },
];

const bhkOptions = ["1", "2", "2.5", "3", "3.5", "4+"];

const mockProperties = [
  {
    id: "p1",
    title: "3 BHK Luxury Apartment in Sholinganallur",
    city: "Chennai",
    locality: "Sholinganallur",
    type: "Apartment",
    bhk: "3",
    sba: 1450,
    carpet: 1220,
    price: 1_05_00_000,
    perSqft: 7240,
    status: "Ready-to-Move",
    rera: true,
    distance: { metro_km: 0.8, school_km: 1.2, itpark_km: 3.5 },
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop",
    description:
      "Premium residential towers with panoramic city views and luxury amenities. Located in the heart of Sholinganallur with excellent connectivity to IT parks and educational institutions.",
    amenities: [
      "Swimming Pool",
      "Gym",
      "Clubhouse",
      "24/7 Security",
      "Children's Play Area",
      "Landscaped Gardens",
    ],
    builder: "Prestige Group",
    possession: "Immediate",
    floorPlan: "3 BHK (1450 sqft)",
  },
  {
    id: "p2",
    title: "2.5 BHK Premium Residence in Whitefield",
    city: "Bengaluru",
    locality: "Whitefield",
    type: "Apartment",
    bhk: "2.5",
    sba: 1180,
    carpet: 980,
    price: 95_00_000,
    perSqft: 8050,
    status: "Under-Construction",
    rera: true,
    distance: { metro_km: 1.1, school_km: 0.9, itpark_km: 2.2 },
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    description:
      "Eco-friendly residences surrounded by greenery and modern facilities. Perfect for IT professionals working in Whitefield area.",
    amenities: [
      "Power Backup",
      "Water Supply",
      "Parking",
      "Lift",
      "Fire Safety",
      "Rain Water Harvesting",
    ],
    builder: "Sobha Limited",
    possession: "Dec 2024",
    floorPlan: "2.5 BHK (1180 sqft)",
  },
  {
    id: "p3",
    title: "Luxury Villa near Gachibowli",
    city: "Hyderabad",
    locality: "Gachibowli",
    type: "Villa",
    bhk: "4+",
    sba: 2800,
    carpet: 2400,
    price: 2_35_00_000,
    perSqft: 8390,
    status: "Ready-to-Move",
    rera: true,
    distance: { metro_km: 2.8, school_km: 1.0, itpark_km: 4.1 },
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    description:
      "Luxury villas with stunning lake views and premium finishes. Exclusive gated community with world-class amenities.",
    amenities: [
      "Private Garden",
      "Swimming Pool",
      "Home Theater",
      "Modular Kitchen",
      "Wooden Flooring",
      "Concierge Service",
    ],
    builder: "Lodha Group",
    possession: "Immediate",
    floorPlan: "4 BHK Villa (2800 sqft)",
  },
  {
    id: "p4",
    title: "Premium Plot in Hinjewadi Phase 2",
    city: "Pune",
    locality: "Hinjewadi",
    type: "Plot",
    bhk: "-",
    sba: 2000,
    carpet: 2000,
    price: 75_00_000,
    perSqft: 3750,
    status: "New Launch",
    rera: false,
    distance: { metro_km: 3.1, school_km: 1.7, itpark_km: 1.0 },
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    description:
      "Premium plots in developing IT corridor with excellent appreciation potential. Clear titles and approved layouts.",
    amenities: [
      "Clear Title",
      "Approved Layout",
      "Road Access",
      "Drainage",
      "Electricity",
      "Water Connection",
    ],
    builder: "Kolte Patil",
    possession: "NA",
    floorPlan: "Plot (2000 sqft)",
  },
  {
    id: "p5",
    title: "1 BHK Studio Apartment in Andheri East",
    city: "Mumbai",
    locality: "Andheri East",
    type: "Studio",
    bhk: "1",
    sba: 550,
    carpet: 480,
    price: 85_00_000,
    perSqft: 15450,
    status: "Ready-to-Move",
    rera: true,
    distance: { metro_km: 0.5, school_km: 1.8, itpark_km: 2.5 },
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    description:
      "Compact and elegant studio apartments perfect for young professionals. Located in prime Andheri East with excellent connectivity.",
    amenities: [
      "Modular Kitchen",
      "WiFi",
      "Housekeeping",
      "Security",
      "Power Backup",
      "Lift",
    ],
    builder: "Raheja Group",
    possession: "Immediate",
    floorPlan: "1 BHK Studio (550 sqft)",
  },
  {
    id: "p6",
    title: "4 BHK Penthouse in Gurugram",
    city: "Delhi-NCR",
    locality: "Gurugram",
    type: "Penthouse",
    bhk: "4+",
    sba: 3200,
    carpet: 2850,
    price: 3_25_00_000,
    perSqft: 10150,
    status: "Ready-to-Move",
    rera: true,
    distance: { metro_km: 1.2, school_km: 0.8, itpark_km: 3.2 },
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    description:
      "Luxurious penthouse with private terrace and panoramic city views. Premium finishes and exclusive amenities.",
    amenities: [
      "Private Terrace",
      "Jacuzzi",
      "Home Automation",
      "Private Lift",
      "Wine Cellar",
      "Servant Quarter",
    ],
    builder: "DLF",
    possession: "Immediate",
    floorPlan: "4 BHK Penthouse (3200 sqft)",
  },
  {
    id: "p7",
    title: "2 BHK Apartment in Koramangala",
    city: "Bengaluru",
    locality: "Koramangala",
    type: "Apartment",
    bhk: "2",
    sba: 1050,
    carpet: 890,
    price: 1_15_00_000,
    perSqft: 10950,
    status: "Under-Construction",
    rera: true,
    distance: { metro_km: 1.8, school_km: 1.1, itpark_km: 2.8 },
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
    description:
      "Modern apartments in the heart of Koramangala with excellent social infrastructure and connectivity.",
    amenities: [
      "Swimming Pool",
      "Gym",
      "Clubhouse",
      "Park",
      "Cafeteria",
      "Security",
    ],
    builder: "Brigade Group",
    possession: "Mar 2025",
    floorPlan: "2 BHK (1050 sqft)",
  },
  {
    id: "p8",
    title: "3.5 BHK Villa in Wakad",
    city: "Pune",
    locality: "Wakad",
    type: "Villa",
    bhk: "3.5",
    sba: 2200,
    carpet: 1950,
    price: 1_85_00_000,
    perSqft: 8400,
    status: "Ready-to-Move",
    rera: true,
    distance: { metro_km: 2.5, school_km: 1.3, itpark_km: 1.8 },
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop",
    description:
      "Spacious villas with private gardens and modern amenities. Perfect for families looking for premium living.",
    amenities: [
      "Private Garden",
      "Car Parking",
      "Modular Kitchen",
      "Wooden Flooring",
      "Solar Panels",
      "Gated Community",
    ],
    builder: "VTP Realty",
    possession: "Immediate",
    floorPlan: "3.5 BHK Villa (2200 sqft)",
  },
];

const trendingBuilders = [
  {
    name: "Prestige Group",
    img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1400&auto=format&fit=crop",
    projects: "50+ Projects",
  },
  {
    name: "DLF",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1400&auto=format&fit=crop",
    projects: "45+ Projects",
  },
  {
    name: "Lodha",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop",
    projects: "35+ Projects",
  },
  {
    name: "Sobha",
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1400&auto=format&fit=crop",
    projects: "40+ Projects",
  },
];

// Hero Slides Data
const heroSlides = [
  {
    id: 1,
    title: "Find Your Dream Home",
    subtitle:
      "Premium properties with verified listings and transparent pricing",
    background:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
    cta: "Explore Properties",
  },
  {
    id: 2,
    title: "Luxury Living Redefined",
    subtitle: "Discover exclusive residences with world-class amenities",
    background:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
    cta: "View Listings",
  },
  {
    id: 3,
    title: "Smart Investment Choices",
    subtitle:
      "Make informed decisions with expert guidance and market insights",
    background:
      "https://images.unsplash.com/photo-1670589953882-b94c9cb380f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
    cta: "Start Investing",
  },
];

/** ---------------------------
 *  Small Reusable UI
 *  ---------------------------
 */
const Section = ({
  title,
  actionText,
  onAction,
  children,
  background = "white",
}) => (
  <section
    className={`mb-16 ${
      background === "gradient"
        ? "bg-gradient-to-br from-pink-50 to-purple-50 py-12 rounded-3xl"
        : ""
    }`}
  >
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {title}
        </h2>
        {actionText ? (
          <button
            onClick={onAction}
            className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            {actionText}
          </button>
        ) : null}
      </div>
      {children}
    </div>
  </section>
);

const Chip = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap transition-all duration-300 ${
      active
        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
        : "bg-white hover:bg-gray-50 border-gray-200 hover:shadow"
    }`}
  >
    {children}
  </button>
);

const Tag = ({ children }) => (
  <span className="px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-700 font-medium">
    {children}
  </span>
);

const Badge = ({ children, type = "default" }) => {
  const styles = {
    rera: "bg-green-100 text-green-800",
    ready: "bg-purple-100 text-purple-800",
    uc: "bg-amber-100 text-amber-800",
    new: "bg-pink-100 text-pink-800",
    default: "bg-gray-100 text-gray-800",
  };

  return (
    <span
      className={`text-xs uppercase tracking-wide font-semibold px-3 py-1 rounded-full ${styles[type]}`}
    >
      {children}
    </span>
  );
};

const PropertyCard = ({ p, onViewDetails }) => (
  <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
    <div className="relative h-48 overflow-hidden">
      <img
        src={p.img}
        alt={p.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-3 left-3 flex gap-2">
        {p.rera && <Badge type="rera">RERA</Badge>}
        {p.status === "Ready-to-Move" && <Badge type="ready">Ready</Badge>}
        {p.status === "Under-Construction" && (
          <Badge type="uc">Under Construction</Badge>
        )}
        {p.status === "New Launch" && <Badge type="new">New Launch</Badge>}
      </div>
      <div className="absolute bottom-3 right-3">
        <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
          {p.bhk === "-" ? "Plot" : `${p.bhk} BHK`}
        </span>
      </div>
    </div>

    <div className="p-5 space-y-4">
      <div>
        <h3 className="font-bold text-lg text-gray-900 line-clamp-2 leading-tight">
          {p.title}
        </h3>
        <p className="text-sm text-gray-600 mt-1 flex items-center">
          <span className="mr-1">📍</span>
          {p.locality}, {p.city}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold text-gray-900">
            {formatPrice(p.price)}
          </div>
          <div className="text-sm text-gray-600">
            ₹{p.perSqft?.toLocaleString()}/sqft
          </div>
        </div>
        <div className="text-right text-sm text-gray-600">
          <div className="font-semibold">Carpet: {p.carpet} sqft</div>
          <div>SBA: {p.sba} sqft</div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Tag>Metro {p.distance.metro_km}km</Tag>
          <Tag>IT Park {p.distance.itpark_km}km</Tag>
        </div>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center">
            ♡
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center">
            ⊕
          </button>
        </div>
      </div>

      <button
        onClick={() => onViewDetails(p)}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        View Details
      </button>
    </div>
  </div>
);

/** ---------------------------
 *  Navigation Component
 *  ---------------------------
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Properties", href: "#properties" },
    { name: "About Us", href: "#about" },
    { name: "Amenities", href: "#amenities" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              EliteHomes
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-700 transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-700 transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-700 transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full w-full mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

/** ---------------------------
 *  Main Home Component
 *  ---------------------------
 */
function Home() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("Buy");
  const [city, setCity] = useState("Chennai");
  const [bhk, setBhk] = useState("2");
  const [propertyType, setPropertyType] = useState("Apartment");
  const [budget, setBudget] = useState(quickBudgets[1]);
  const [reraOnly, setReraOnly] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllFeatured, setShowAllFeatured] = useState(false);
  const [showAllReady, setShowAllReady] = useState(false);
  const [showAllUnderConstruction, setShowAllUnderConstruction] =
    useState(false);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featured = useMemo(() => {
    return mockProperties.filter(
      (p) =>
        (p.city === city || city === "Chennai") &&
        (p.bhk === bhk || p.bhk === "4+" || bhk === "4+") &&
        p.type === propertyType &&
        (!reraOnly || p.rera) &&
        p.price >= budget.min &&
        p.price <= budget.max
    );
  }, [bhk, budget, city, reraOnly, propertyType]);

  const readyProperties = useMemo(() => {
    return mockProperties.filter((p) => p.status === "Ready-to-Move");
  }, []);

  const underConstructionProperties = useMemo(() => {
    return mockProperties.filter(
      (p) => p.status === "Under-Construction" || p.status === "New Launch"
    );
  }, []);

  // Properties to show in each section
  const featuredPropertiesToShow = showAllFeatured
    ? featured
    : featured.slice(0, 4);
  const readyPropertiesToShow = showAllReady
    ? readyProperties
    : readyProperties.slice(0, 4);
  const underConstructionPropertiesToShow = showAllUnderConstruction
    ? underConstructionProperties
    : underConstructionProperties.slice(0, 4);

  const handleViewDetails = (property) => {
    navigate("/projectdetails", { state: { property } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Slides */}
      <section id="home" className="relative h-screen overflow-hidden pt-16">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.background})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
            </div>

            {/* Slide Content */}
            <div className="relative h-full flex items-center justify-center text-center text-white">
              <div className="max-w-4xl mx-auto px-4 transform transition-all duration-1000 ease-out">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
                  {slide.subtitle}
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-400">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Search Panel */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 -mt-20 relative z-10 mb-16">
          {/* Tabs */}
          <div className="inline-flex rounded-2xl overflow-hidden bg-gray-100 p-1 mb-8">
            {["Buy", "Rent", "Plot", "Commercial"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-3 text-sm md:text-base font-semibold transition-all duration-300 ${
                  tab === t
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Search Filters */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-3">
              <label className="text-sm font-semibold text-gray-700 mb-3 block">
                📍 City
              </label>
              <div className="flex gap-2 overflow-x-auto scrollbar-none pb-2">
                {cities.map((c) => (
                  <Chip key={c} active={city === c} onClick={() => setCity(c)}>
                    {c}
                  </Chip>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <label className="text-sm font-semibold text-gray-700 mb-3 block">
                🏠 BHK Type
              </label>
              <div className="flex gap-2 overflow-x-auto scrollbar-none pb-2">
                {bhkOptions.map((b) => (
                  <Chip key={b} active={bhk === b} onClick={() => setBhk(b)}>
                    {b} {b === "4+" ? "BHK+" : "BHK"}
                  </Chip>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <label className="text-sm font-semibold text-gray-700 mb-3 block">
                🏘️ Property Type
              </label>
              <div className="flex gap-2 overflow-x-auto scrollbar-none pb-2">
                {propertyTypes.map((type) => (
                  <Chip
                    key={type}
                    active={propertyType === type}
                    onClick={() => setPropertyType(type)}
                  >
                    {type}
                  </Chip>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <label className="text-sm font-semibold text-gray-700 mb-3 block">
                💰 Budget
              </label>
              <div className="flex gap-2 overflow-x-auto scrollbar-none pb-2">
                {quickBudgets.map((q) => (
                  <Chip
                    key={q.label}
                    active={budget.label === q.label}
                    onClick={() => setBudget(q)}
                  >
                    {q.label}
                  </Chip>
                ))}
              </div>
            </div>

            <div className="md:col-span-12 flex items-center justify-between gap-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <input
                  id="rera"
                  type="checkbox"
                  checked={reraOnly}
                  onChange={(e) => setReraOnly(e.target.checked)}
                  className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <label
                  htmlFor="rera"
                  className="text-sm font-medium text-gray-700"
                >
                  ✅ RERA Verified Only
                </label>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-3 rounded-xl border-2 border-purple-600 text-purple-600 font-semibold hover:bg-pink-50 transition-colors">
                  🔍 Advanced Search
                </button>
                <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  View {tab} Properties
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Cities */}
        {/* <Section title="🌆 Explore Popular Cities" background="gradient">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.map((c) => (
              <button
                key={c}
                onClick={() => setCity(c)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 transform hover:-translate-y-2 ${
                  city === c 
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl" 
                    : "bg-white hover:shadow-xl border border-gray-200"
                }`}
              >
                <div className="text-lg font-bold mb-2">{c}</div>
                <div className={`${city === c ? 'text-pink-100' : 'text-gray-600'} text-sm`}>
                  Premium Properties
                </div>
              </button>
            ))}
          </div>
        </Section> */}

        {/* Featured Properties */}
        {/* <Section title="⭐ Featured Properties For You">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredPropertiesToShow.map((p) => (
                <PropertyCard key={p.id} p={p} onViewDetails={handleViewDetails} />
              ))}
            </div>
            
            {!showAllFeatured && featured.length > 4 && (
              <div className="text-center">
                <button 
                  onClick={() => setShowAllFeatured(true)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  View More Properties
                </button>
              </div>
            )}
          </div>
        </Section> */}

        {/* Ready to Move */}
        <Section title="🚀 Ready to Move Properties" background="gradient">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {readyPropertiesToShow.map((p) => (
                <PropertyCard
                  key={p.id}
                  p={p}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>

            {!showAllReady && readyProperties.length > 4 && (
              <div className="text-center">
                <button
                  onClick={() => setShowAllReady(true)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  View More Ready Properties
                </button>
              </div>
            )}
          </div>
        </Section>

        {/* Under Construction */}
        <Section title="🏗️ Under Construction (Great Investment)">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {underConstructionPropertiesToShow.map((p) => (
                <PropertyCard
                  key={p.id}
                  p={p}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>

            {!showAllUnderConstruction &&
              underConstructionProperties.length > 4 && (
                <div className="text-center">
                  <button
                    onClick={() => setShowAllUnderConstruction(true)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    View More Under Construction
                  </button>
                </div>
              )}
          </div>
        </Section>

        {/* Trending Builders */}
        <Section title="🏆 Trusted Builders" background="gradient">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingBuilders.map((b) => (
              <div
                key={b.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="h-40 relative overflow-hidden">
                  <img
                    src={b.img}
                    alt={b.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-5">
                  <div className="font-bold text-lg text-gray-900 mb-2">
                    {b.name}
                  </div>
                  <div className="text-sm text-gray-600 mb-3">{b.projects}</div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                    View Projects
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section title="💫 Why Choose Us?">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "📊",
                title: "Transparent Pricing",
                desc: "No hidden costs with detailed breakup of all charges and government fees.",
              },
              {
                icon: "🛡️",
                title: "RERA Verified",
                desc: "All properties are verified with proper documentation and legal clearance.",
              },
              {
                icon: "🎯",
                title: "Expert Guidance",
                desc: "Get expert advice on property selection, financing, and legal procedures.",
              },
            ].map((x, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-pink-50 border border-pink-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="text-3xl mb-4">{x.icon}</div>
                <div className="text-xl font-bold text-gray-900 mb-3">
                  {x.title}
                </div>
                <p className="text-gray-600 leading-relaxed">{x.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Enquiry Section */}
        <Section title="📞 Get Free Consultation" background="gradient">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Need Help Choosing the Right Property?
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  Our real estate experts will help you find the perfect
                  property that matches your requirements and budget.
                </p>
                <div className="space-y-3">
                  {[
                    "✅ Free Property Consultation",
                    "✅ Legal Verification Support",
                    "✅ Home Loan Assistance",
                    "✅ Site Visit Coordination",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-700"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Requirements
                    </label>
                    <textarea
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="Tell us about your property requirements..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Get Free Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <span className="ml-3 text-2xl font-bold">EliteHomes</span>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                India's most trusted real estate platform helping you find your
                dream home with confidence and transparency.
              </p>
              <div className="flex space-x-3">
                {["fb", "tw", "ig", "in"].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                {[
                  "Buy Property",
                  "Rent Property",
                  "Sell Property",
                  "Commercial",
                  "Plot/Land",
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-400">
                {[
                  "Property Valuation",
                  "Legal Verification",
                  "Home Loans",
                  "Site Visits",
                  "Property Management",
                ].map((service) => (
                  <li key={service}>
                    <a href="#" className="hover:text-white transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400 mb-4">
                <div className="flex items-center">
                  <span className="mr-2">📞</span>
                  +91 98765 43210
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✉️</span>
                  info@EliteHomes.com
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📍</span>
                  Across India
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 rounded-l-lg text-gray-900 focus:outline-none"
                  />
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 EliteHomes. All rights reserved. | Made with ❤️ for
              India
            </p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
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

export default Home;
