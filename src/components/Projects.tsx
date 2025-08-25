import React from 'react';
import { Github, ExternalLink, Calendar, Tag, ChevronRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Revolutionizing Rural Healthcare",
      category: "Healthcare Technology",
      description: "A comprehensive healthcare solution prototype designed to improve rural healthcare access with modern technology.",
      longDescription: "This innovative prototype addresses healthcare accessibility in rural areas through a multi-faceted approach combining AI, voice technology, and real-time tracking systems.",
      tech: ["Voice AI", "Google Maps API", "Real-time Tracking", "Mobile Development"],
      features: [
        "Voice-enabled chatbot for medical consultations",
        "Call-based medicine ordering system for low-connectivity areas", 
        "Real-time delivery tracking via Google Maps integration",
        "Support for regional dialects (planned)",
        "Offline ordering capabilities (planned)",
        "Teleconsultation features (planned)"
      ],
      status: "Prototype",
      color: "blue",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "AI-Driven Drug Toxicity Prediction",
      category: "Artificial Intelligence",
      description: "Flask web application for drug toxicity prediction using machine learning models and molecular analysis.",
      longDescription: "Advanced AI system that predicts drug toxicity using SMILES molecular input, leveraging multiple machine learning models for accurate pharmaceutical analysis.",
      tech: ["Flask", "Python", "DeepChem", "RDKit", "Machine Learning", "GNN", "Random Forest"],
      features: [
        "SMILES molecular input processing",
        "Multiple ML models (Random Forest, DNN, Graph Neural Networks)",
        "Trained on Tox21 dataset for multi-label classification",
        "Molecular visualization with probability scores",
        "Comprehensive testing suite",
        "Future: Explainable AI and API deployment"
      ],
      status: "Completed",
      color: "teal",
      gradient: "from-teal-500 to-teal-700",
      github: "#",
      demo: "#"
    },
    {
      title: "Government Citizen Engagement Platform",
      category: "Government Technology",
      description: "NLP-powered platform using IBM Granite Foundation Models for citizen-government interaction enhancement.",
      longDescription: "Enterprise-grade platform utilizing IBM watsonx.ai for advanced Natural Language Processing tasks in government services.",
      tech: ["IBM watsonx.ai", "Python", "NLP", "IBM Granite Models", "Text Summarization", "Classification"],
      features: [
        "Text summarization for government documents",
        "Automated classification of citizen requests",
        "Question-answering system for public inquiries",
        "Integration with IBM Granite Foundation Models",
        "Scalable enterprise architecture",
        "Data governance and security compliance"
      ],
      status: "Completed",
      color: "purple",
      gradient: "from-purple-500 to-purple-700",
      github: "#"
    },
    {
      title: "Secure Password Manager",
      category: "Cybersecurity",
      description: "Full-stack password management solution with advanced encryption and user-friendly interface.",
      longDescription: "Robust password management system developed during Techplement internship, focusing on security and user experience.",
      tech: ["Python", "Tkinter", "SQL", "Encryption", "GUI Development"],
      features: [
        "Strong encryption algorithms for password storage",
        "Secure password generation with customizable criteria",
        "User-friendly Tkinter-based interface",
        "Database integration for persistent storage",
        "Password retrieval and management system",
        "Advanced security best practices implementation"
      ],
      status: "Completed",
      color: "orange",
      gradient: "from-orange-500 to-orange-700",
      github: "#"
    },
    {
      title: "E-Commerce Website",
      category: "Web Development",
      description: "Full-featured e-commerce platform with modern design and comprehensive functionality.",
      longDescription: "A complete e-commerce solution built with modern web technologies, featuring user authentication, product management, and secure payment processing.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design", "Payment Integration"],
      features: [
        "Responsive design for all devices",
        "Product catalog with search and filtering",
        "User authentication and account management",
        "Shopping cart and checkout functionality",
        "Payment gateway integration",
        "Admin panel for product management"
      ],
      status: "Completed",
      color: "green",
      gradient: "from-green-500 to-green-700",
      github: "#",
      demo: "#"
    },
    {
      title: "Health Store",
      category: "Healthcare E-commerce",
      description: "Specialized e-commerce platform for health and wellness products with advanced features.",
      longDescription: "A dedicated health store platform designed for selling health products with specialized features for medical and wellness items.",
      tech: ["HTML", "CSS", "JavaScript", "Database Management", "Product Categorization"],
      features: [
        "Specialized health product categories",
        "Product information and specifications",
        "Health-focused user interface design",
        "Prescription upload functionality",
        "Health tips and articles section",
        "Customer review and rating system"
      ],
      status: "Completed",
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-700",
      github: "#",
      demo: "#"
    },
    {
      title: "Curriculum Vitae Website",
      category: "Personal Portfolio",
      description: "Professional CV website showcasing skills, experience, and achievements in an interactive format.",
      longDescription: "A modern, interactive CV website that presents professional information in an engaging and accessible format.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design", "Interactive Elements"],
      features: [
        "Interactive timeline for experience",
        "Skills visualization with progress bars",
        "Downloadable PDF resume",
        "Contact form integration",
        "Mobile-responsive design",
        "Professional typography and layout"
      ],
      status: "Completed",
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-700",
      github: "#",
      demo: "https://divyakompalli.github.io/carousel/"
    },
    {
      title: "Social Media Website",
      category: "Social Platform",
      description: "Full-featured social media platform with user interaction and content sharing capabilities.",
      longDescription: "A comprehensive social media platform enabling users to connect, share content, and interact in a modern web environment.",
      tech: ["HTML", "CSS", "JavaScript", "User Authentication", "Real-time Features"],
      features: [
        "User registration and authentication",
        "Profile creation and customization",
        "Post creation with media support",
        "Like, comment, and share functionality",
        "Friend/follower system",
        "Real-time notifications"
      ],
      status: "Completed",
      color: "pink",
      gradient: "from-pink-500 to-pink-700",
      github: "#",
      demo: "https://divyakompalli.github.io/social/"
    },
    {
      title: "Portfolio Website",
      category: "Personal Branding",
      description: "Professional portfolio website showcasing projects, skills, and professional journey.",
      longDescription: "A sleek and modern portfolio website designed to showcase professional work, skills, and achievements to potential employers and clients.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design", "Modern UI/UX"],
      features: [
        "Project showcase with detailed descriptions",
        "Skills and expertise display",
        "Professional timeline",
        "Contact and networking integration",
        "Modern animations and transitions",
        "SEO optimized structure"
      ],
      status: "Completed",
      color: "cyan",
      gradient: "from-cyan-500 to-cyan-700",
      github: "#",
      demo: "https://enhanced-portfolio-w-ss3o.bolt.host/"
    },
    {
      title: "Mental Health Supporter",
      category: "Healthcare Technology",
      description: "Digital platform providing mental health resources, support, and wellness tracking tools.",
      longDescription: "A comprehensive mental health support platform designed to provide resources, tracking tools, and community support for mental wellness.",
      tech: ["Web Technologies", "Database Management", "User Interface Design", "Privacy & Security"],
      features: [
        "Mental health assessment tools",
        "Mood tracking and analytics",
        "Resource library with articles and guides",
        "Anonymous support community",
        "Crisis intervention resources",
        "Privacy-focused design and data protection"
      ],
      status: "Completed",
      color: "violet",
      gradient: "from-violet-500 to-violet-700",
      github: "#",
      demo: "https://mental-health-supporter.netlify.app/"
    }
  ];

  // Additional projects from HTML file
  const additionalProjects = [
    {
      title: "Online Store",
      category: "E-commerce Platform",
      description: "A fully functional e-commerce platform online store built with HTML and CSS.",
      longDescription: "A comprehensive e-commerce solution featuring product catalogs, shopping cart functionality, and responsive design built with modern HTML and CSS techniques.",
      tech: ["HTML", "CSS", "Responsive Design", "E-commerce"],
      features: [
        "Product catalog with detailed listings",
        "Shopping cart functionality",
        "Responsive design for all devices",
        "Clean and modern user interface",
        "Product search and filtering",
        "Checkout process implementation"
      ],
      status: "Completed",
      color: "blue",
      gradient: "from-blue-500 to-blue-700",
      demo: "https://divyakompalli.github.io/Online-Store/"
    },
    {
      title: "My Store",
      category: "E-commerce Platform",
      description: "A fully functional e-commerce platform my store built with HTML and JavaScript.",
      longDescription: "An interactive e-commerce platform with dynamic functionality powered by JavaScript, featuring enhanced user interactions and modern web development practices.",
      tech: ["HTML", "JavaScript", "CSS", "DOM Manipulation"],
      features: [
        "Dynamic product loading with JavaScript",
        "Interactive shopping cart",
        "Real-time price calculations",
        "Form validation and user feedback",
        "Local storage for cart persistence",
        "Responsive mobile-first design"
      ],
      status: "Completed",
      color: "green",
      gradient: "from-green-500 to-green-700",
      demo: "https://divyakompalli.github.io/mystore/"
    },
    {
      title: "React Store",
      category: "Modern E-commerce",
      description: "A fully functional e-commerce platform online store built with React.",
      longDescription: "A modern, component-based e-commerce application built with React, showcasing advanced frontend development skills and modern JavaScript frameworks.",
      tech: ["React", "JavaScript", "CSS", "Component Architecture", "State Management"],
      features: [
        "Component-based architecture with React",
        "State management for cart and products",
        "Reusable UI components",
        "Modern ES6+ JavaScript features",
        "Responsive design with CSS modules",
        "Optimized performance and user experience"
      ],
      status: "Completed",
      color: "cyan",
      gradient: "from-cyan-500 to-cyan-700",
      demo: "https://divyakompalli.github.io/react-tp-build/"
    },
    {
      title: "Bank Website",
      category: "Financial Platform",
      description: "A fully functional banking platform built with JavaScript and HTML.",
      longDescription: "A comprehensive banking website simulation featuring account management, transaction processing, and secure user authentication built with modern web technologies.",
      tech: ["JavaScript", "HTML", "CSS", "Financial APIs", "Security"],
      features: [
        "Account management system",
        "Transaction processing simulation",
        "User authentication and security",
        "Balance tracking and history",
        "Responsive banking interface",
        "Form validation and error handling"
      ],
      status: "Completed",
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-700",
      demo: "https://divyakompalli.github.io/bank/"
    },
    {
      title: "Unplanned Trip Guide App",
      category: "Travel Application",
      description: "An unplanned-trip-guide application using Vue and Vite.",
      longDescription: "A modern travel planning application built with Vue.js and Vite, helping users discover and plan spontaneous trips with interactive features and real-time recommendations.",
      tech: ["Vue.js", "Vite", "JavaScript", "Travel APIs", "Modern Build Tools"],
      features: [
        "Vue.js component-based architecture",
        "Fast development with Vite build tool",
        "Interactive trip planning interface",
        "Real-time travel recommendations",
        "Responsive design for mobile travelers",
        "Modern JavaScript framework implementation"
      ],
      status: "Completed",
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-700",
      demo: "https://unplanned-trip-guide.netlify.app/"
    },
    {
      title: "Carousel Website",
      category: "Interactive UI",
      description: "A fully functional carousel built with Bootstrap and HTML.",
      longDescription: "An interactive carousel website showcasing advanced Bootstrap components and responsive design principles with smooth animations and user-friendly navigation.",
      tech: ["Bootstrap", "HTML", "CSS", "JavaScript", "Responsive Design"],
      features: [
        "Bootstrap carousel component implementation",
        "Smooth slide transitions and animations",
        "Touch-friendly mobile navigation",
        "Auto-play and manual controls",
        "Responsive image optimization",
        "Cross-browser compatibility"
      ],
      status: "Completed",
      color: "purple",
      gradient: "from-purple-500 to-purple-700",
      demo: "https://divyakompalli.github.io/carousel/"
    }
  ];

  // Combine all projects
  const allProjects = [...projects, ...additionalProjects];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive portfolio spanning healthcare, AI/ML, web development, e-commerce, and social platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-2">
                    <Tag size={18} />
                    <span className="text-sm font-medium opacity-90">{project.category}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-100' 
                      : 'bg-yellow-500/20 text-yellow-100'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="opacity-90">{project.description}</p>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-700 mb-6">{project.longDescription}</p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 bg-${project.color}-100 text-${project.color}-800 rounded-full text-sm font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6 flex-1">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <ChevronRight size={16} className={`text-${project.color}-600 mr-2 mt-1 flex-shrink-0`} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    {project.features.length > 3 && (
                      <div className="text-gray-500 text-sm ml-6">
                        +{project.features.length - 3} more features...
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className={`flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200`}
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:opacity-90 transition-opacity duration-200`}
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects that solve real-world problems. 
              Let's discuss how we can create something amazing together!
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;