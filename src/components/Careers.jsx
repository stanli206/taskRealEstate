import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Careers() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const jobCategories = [
    { id: 'all', name: 'All Positions' },
    { id: 'sales', name: 'Sales & Marketing' },
    { id: 'technology', name: 'Technology' },
    { id: 'operations', name: 'Operations' },
    { id: 'design', name: 'Design & Architecture' },
    { id: 'finance', name: 'Finance & Legal' }
  ];

  const featuredJobs = [
    {
      id: 1,
      title: "Senior Real Estate Consultant",
      department: "Sales & Marketing",
      category: "sales",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹6L - ₹12L PA",
      posted: "2 days ago",
      description: "We are looking for an experienced Real Estate Consultant to join our elite sales team. You will be responsible for managing high-value clients and driving sales for our premium properties.",
      requirements: [
        "Bachelor's degree in Business or related field",
        "3+ years experience in real estate sales",
        "Excellent communication and negotiation skills",
        "Proven track record in sales targets",
        "Knowledge of local real estate market"
      ],
      benefits: [
        "High commission structure",
        "Health insurance",
        "Performance bonuses",
        "Career growth opportunities",
        "Flexible work arrangements"
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      department: "Technology",
      category: "technology",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹8L - ₹15L PA",
      posted: "1 week ago",
      description: "Join our technology team to build innovative solutions for the real estate industry. Work on cutting-edge projects including VR property tours and AI-powered recommendations.",
      requirements: [
        "Degree in Computer Science or related field",
        "Experience with React, Node.js, and MongoDB",
        "Knowledge of cloud platforms (AWS/Azure)",
        "Understanding of REST APIs",
        "Problem-solving skills"
      ],
      benefits: [
        "Stock options",
        "Learning budget",
        "Remote work options",
        "Latest tech equipment",
        "Startup culture"
      ]
    }
  ];

  const jobOpenings = [
    {
      id: 3,
      title: "Property Manager",
      department: "Operations",
      category: "operations",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "2-3 years",
      salary: "₹5L - ₹8L PA",
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Interior Designer",
      department: "Design & Architecture",
      category: "design",
      location: "Delhi, NCR",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹4L - ₹7L PA",
      posted: "1 week ago"
    },
    {
      id: 5,
      title: "Digital Marketing Specialist",
      department: "Sales & Marketing",
      category: "sales",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹5L - ₹9L PA",
      posted: "5 days ago"
    },
    {
      id: 6,
      title: "Legal Counsel",
      department: "Finance & Legal",
      category: "finance",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "4-6 years",
      salary: "₹10L - ₹18L PA",
      posted: "2 weeks ago"
    },
    {
      id: 7,
      title: "CRM Manager",
      department: "Technology",
      category: "technology",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹7L - ₹12L PA",
      posted: "4 days ago"
    },
    {
      id: 8,
      title: "Site Supervisor",
      department: "Operations",
      category: "operations",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹4L - ₹7L PA",
      posted: "1 week ago"
    }
  ];

  const perks = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance bonuses"
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family"
    },
    {
      icon: "🎓",
      title: "Learning & Development",
      description: "Continuous learning opportunities and skill development programs"
    },
    {
      icon: "🏠",
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options"
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description: "Clear career progression paths and growth opportunities"
    },
    {
      icon: "🎯",
      title: "Impactful Work",
      description: "Work on projects that transform how people find their dream homes"
    }
  ];

  const stats = [
    { number: "150+", label: "Team Members" },
    { number: "25+", label: "Cities Presence" },
    { number: "98%", label: "Employee Satisfaction" },
    { number: "50%", label: "Growth YoY" }
  ];

  const filteredJobs = activeCategory === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === activeCategory);

  const handleViewJobDetails = (job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  const handleApplyNow = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    
    alert('Application submitted successfully!');
    setShowApplicationForm(false);
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Build your career with India's fastest growing real estate platform. 
            Transform how people find their dream homes.
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

     
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Join EliteHomes?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className="text-4xl mb-4">{perk.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {perk.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <p className="text-purple-600 font-semibold">{job.department}</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <span className="mr-2">📍</span>
                      {job.location}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <span className="mr-2">⏰</span>
                      {job.type}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <span className="mr-2">🎯</span>
                      {job.experience}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <span className="mr-2">💰</span>
                      {job.salary}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {job.description}
                  </p>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleViewJobDetails(job)}
                      className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={() => handleApplyNow(job)}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore all available positions and find the perfect role for your skills and aspirations.
            </p>
          </div>

        
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {jobCategories.map((category) => (
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

          
          <div className="grid md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-purple-600 font-semibold text-sm">{job.department}</p>
                  </div>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {job.posted}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center text-gray-600 text-xs">
                    <span className="mr-1">📍</span>
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-xs">
                    <span className="mr-1">⏰</span>
                    {job.type}
                  </div>
                  <div className="flex items-center text-gray-600 text-xs">
                    <span className="mr-1">🎯</span>
                    {job.experience}
                  </div>
                  <div className="flex items-center text-gray-600 text-xs">
                    <span className="mr-1">💰</span>
                    {job.salary}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => handleViewJobDetails(job)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => handleApplyNow(job)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                  >
                    Quick Apply
                  </button>
                </div>
              </div>
            ))}
          </div>

          
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No positions found</h3>
              <p className="text-gray-600">We don't have any openings in this category at the moment.</p>
            </div>
          )}
        </div>
      </section>

    
      <section className="py-20 bg-gradient-to-r from-gray-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't Find Your Perfect Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Send us your resume and we'll notify you when a matching position opens up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Submit Your Resume
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Contact HR
            </button>
          </div>
        </div>
      </section>

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
                Building careers while building dreams. Join us in transforming the real estate industry.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Departments</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sales & Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Operations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">HR Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +91 98765 43210</li>
                <li>✉️ careers@elitehomes.com</li>
                <li>📍 Multiple Locations Across India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EliteHomes Careers. All rights reserved.</p>
          </div>
        </div>
      </footer>

      
      {selectedJob && !showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedJob.title}</h3>
                  <p className="text-purple-600 font-semibold text-lg">{selectedJob.department}</p>
                </div>
                <button 
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <span className="mr-3">📍</span>
                    <span className="font-semibold">{selectedJob.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-3">⏰</span>
                    <span className="font-semibold">{selectedJob.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-3">🎯</span>
                    <span className="font-semibold">{selectedJob.experience}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-3">💰</span>
                    <span className="font-semibold">{selectedJob.salary}</span>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">About This Role</h4>
                  <p className="text-gray-600 text-sm">{selectedJob.description}</p>
                </div>
              </div>

              {selectedJob.requirements && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedJob.benefits && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits & Perks</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedJob.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button 
                  onClick={() => handleApplyNow(selectedJob)}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Apply for This Position
                </button>
                <button className="flex-1 border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Save for Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Apply for {selectedJob.title}</h3>
              <button 
                onClick={() => setShowApplicationForm(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmitApplication} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Where do you work currently?"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Tell us why you're interested in this position..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume *</label>
                <input
                  type="file"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  accept=".pdf,.doc,.docx"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Careers;