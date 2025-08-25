import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-4xl font-bold text-white">SK</span>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Sri Divya Muktha
            </span>
            <br />
            <span className="text-3xl md:text-5xl text-gray-700">Kompalli</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Third-year <strong>Information Technology</strong> student at GRIET, passionate about 
            <strong className="text-blue-600"> Full-Stack Development</strong>, 
            <strong className="text-teal-600"> AI/ML</strong>, and 
            <strong className="text-orange-600"> Natural Language Processing</strong>
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone size={18} className="text-blue-600" />
              <span>+91 6309547910</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={18} className="text-teal-600" />
              <span>sridivyakompalli@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={18} className="text-orange-600" />
              <span>Telangana, India</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/DivyaKompalli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-gray-700 hover:text-blue-600"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-gray-700 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:sridivyakompalli@gmail.com" 
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-gray-700 hover:text-teal-600"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce p-2 text-gray-400 hover:text-blue-600 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;