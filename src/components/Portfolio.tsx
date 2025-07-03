import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, PlayCircle, X, Calendar, Users, TrendingUp, Star, ArrowRight } from 'lucide-react';
import { portfolioItems } from '../data/portfolioData';

interface PortfolioProps {
  showAll?: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ showAll = false }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ['All', 'Mobile Apps', 'Websites', 'Branding', 'SEO'];

  // Limit items to 4 for homepage, show all for portfolio page
  const displayItems = showAll ? filteredItems : filteredItems.slice(0, 4);

  const handleFilter = (category: string) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === category));
    }
  };

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our successful projects that have transformed businesses and delivered exceptional results across mobile apps, websites, branding, and SEO
            </p>

            {/* Filter Buttons - Only show on full portfolio page */}
            {showAll && (
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleFilter(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeFilter === category
                        ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-label={`Filter portfolio by ${category}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayItems.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                onClick={() => openProjectModal(item)}
              >
                {/* Image/Video Container */}
                <div className="relative h-64 overflow-hidden">
                  {item.type === 'video' ? (
                    <div className="relative h-full">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <PlayCircle className="w-8 h-8 text-blue-600" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      item.category === 'Mobile Apps' ? 'bg-blue-100 text-blue-800' :
                      item.category === 'Websites' ? 'bg-teal-100 text-teal-800' :
                      item.category === 'Branding' ? 'bg-purple-100 text-purple-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        +{item.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Results */}
                  {item.results && (
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-green-800 text-sm font-medium">
                        {item.results}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button - Only show on homepage */}
          {!showAll && (
            <div className="text-center mt-12">
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                aria-label="View all portfolio projects"
              >
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          )}

          {/* Load More Button for filtered results on portfolio page */}
          {showAll && filteredItems.length > displayItems.length && (
            <div className="text-center mt-12">
              <button 
                className="px-8 py-3 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200 transition-colors duration-200"
                aria-label="Load more portfolio projects"
              >
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeProjectModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full mt-2 ${
                  selectedProject.category === 'Mobile Apps' ? 'bg-blue-100 text-blue-800' :
                  selectedProject.category === 'Websites' ? 'bg-teal-100 text-teal-800' :
                  selectedProject.category === 'Branding' ? 'bg-purple-100 text-purple-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {selectedProject.category}
                </span>
              </div>
              <button
                onClick={closeProjectModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Image/Video */}
              <div className="relative h-80 mb-8 rounded-xl overflow-hidden">
                {selectedProject.type === 'video' ? (
                  <div className="relative h-full">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                        <PlayCircle className="w-10 h-10 text-blue-600" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Project Details */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Project Overview</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-bold text-gray-900">{selectedProject.duration || '3-6 months'}</div>
                    </div>
                    <div className="bg-teal-50 rounded-lg p-4 text-center">
                      <Users className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-600">Team Size</div>
                      <div className="font-bold text-gray-900">{selectedProject.teamSize || '3-5 people'}</div>
                    </div>
                  </div>
                </div>

                {/* Results & Testimonial */}
                <div>
                  {/* Results */}
                  {selectedProject.results && (
                    <div className="bg-green-50 rounded-xl p-6 mb-6">
                      <div className="flex items-center mb-3">
                        <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
                        <h4 className="font-bold text-gray-900">Results Achieved</h4>
                      </div>
                      <p className="text-green-800 font-medium">
                        {selectedProject.results}
                      </p>
                    </div>
                  )}

                  {/* Client Testimonial */}
                  {selectedProject.testimonial && (
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <div className="flex items-center mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 italic mb-4">
                        "{selectedProject.testimonial}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600 font-bold">
                            {selectedProject.client?.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{selectedProject.client}</div>
                          <div className="text-gray-600 text-sm">{selectedProject.clientRole || 'Client'}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-8">
                    <Link
                      to="/contact"
                      onClick={closeProjectModal}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                      Start Similar Project
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;