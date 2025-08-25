import React from 'react';
import { GraduationCap, Target, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image/Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-8 shadow-xl">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-center justify-center w-full h-64 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl text-white text-6xl font-bold">
                    DK
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                As a final-year <strong className="text-blue-600">Information Technology</strong> student at 
                Gokaraju RangaRaju Institute of Engineering & Technology (GRIET), I am passionate about 
                leveraging technology to solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                My expertise spans across <strong className="text-teal-600">full-stack development</strong>, 
                <strong className="text-blue-600"> artificial intelligence</strong>, and 
                <strong className="text-orange-600"> natural language processing</strong>. 
                I believe in continuous learning and applying cutting-edge technologies to create 
                innovative solutions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-2">8.4</div>
                  <div className="text-sm text-gray-600">CGPA</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-teal-600 mb-2">3+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600 mb-2">6+</div>
                  <div className="text-sm text-gray-600">Certifications</div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Goals */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-600 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900">
                  Gokaraju RangaRaju Institute of Engineering & Technology
                </h4>
                <p className="text-gray-700">Bachelor of Technology - Information Technology</p>
                <p className="text-gray-600">CGPA: 8.4 | Expected Graduation: June 2026</p>
                <p className="text-gray-600">Location: Hyderabad, Telangana</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="text-teal-600 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Goals</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  To leverage my skills in programming and software development to contribute to 
                  innovative projects that solve real-world problems.
                </p>
                <p className="text-gray-700">
                  Specializing in AI/ML applications, particularly in healthcare and government 
                  technology solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;