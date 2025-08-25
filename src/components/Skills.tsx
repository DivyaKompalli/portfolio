import React from 'react';
import { Code, Database, Cpu, Award, Globe, Server, Brain, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Frontend Development",
      color: "blue",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "teal",
      skills: [
        { name: "Python", level: 92 },
        { name: "Java", level: 85 },
        { name: "Flask", level: 80 },
        { name: "API Development", level: 82 }
      ]
    },
    {
      icon: Database,
      title: "Database & Cloud",
      color: "indigo",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "SQL/DBMS", level: 90 },
        { name: "Microsoft Azure", level: 78 },
        { name: "Database Design", level: 88 }
      ]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      color: "purple",
      skills: [
        { name: "Machine Learning", level: 82 },
        { name: "Natural Language Processing", level: 80 },
        { name: "DeepChem", level: 75 },
        { name: "Data Science", level: 85 }
      ]
    },
    {
      icon: Code,
      title: "Programming Languages",
      color: "orange",
      skills: [
        { name: "C/C++", level: 88 },
        { name: "Python", level: 92 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 88 }
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity & Networks",
      color: "red",
      skills: [
        { name: "Network Security", level: 80 },
        { name: "CCNA Fundamentals", level: 85 },
        { name: "Cybersecurity Basics", level: 78 },
        { name: "Switching & Routing", level: 82 }
      ]
    }
  ];

  const certifications = [
    "Cisco CCNA Introduction To Network",
    "Cisco CCNA Switching, Routing, and Wireless Essentials", 
    "Cisco CCNA Enterprise Networking, Security, and Automation",
    "Cisco Introduction to Cybersecurity",
    "Cisco Python Essentials 1",
    "Cisco Python Essentials 2"
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive skill set spanning full-stack development, AI/ML, and cybersecurity
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 bg-${category.color}-100 rounded-xl mr-4`}>
                  <category.icon className={`text-${category.color}-600`} size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 h-2.5 rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-8">
            <Award className="text-blue-600 mr-3" size={32} />
            <h3 className="text-2xl font-bold text-gray-900">Professional Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mr-4"></div>
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;