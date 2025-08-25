import React from "react";
import { Calendar, MapPin, Building, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Generative AI Internship",
      company: "AICTE",
      location: "Hyderabad (Remote)",
      duration: "November 2024 - May 2025",
      type: "Completed",
      description: "Building a chatbot using NLP with advanced techniques",
      highlights: [
        "Implementing tokenization, named entity recognition, and intent classification",
        "Developing rule-based, retrieval-based, and generative models",
        "Deploying chatbot on web platforms with continuous improvement systems",
        "Gaining expertise in Natural Language Processing and conversational AI",
      ],
      color: "blue",
    },
    {
      title: "Software Development Intern",
      company: "Techplement",
      location: "Hyderabad (Remote)",
      duration: "May 2024 - July 2024",
      type: "Completed",
      description:
        "Developed a robust password manager using Python, Tkinter, and SQL",
      highlights: [
        "Implemented strong encryption algorithms for secure password storage",
        "Created user-friendly interface for password generation and management",
        "Delivered a fully functional one-month password manager solution",
        "Gained valuable experience in full-stack development and data security",
      ],
      color: "teal",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hands-on experience in software development, AI/ML, and innovative
            technology solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 mr-3">
                        {exp.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          exp.type === "Current"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-600 mb-2">
                      <Building
                        size={18}
                        className={`mr-2 text-${exp.color}-600`}
                      />
                      <span className="font-medium">{exp.company}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-500">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg">{exp.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Achievements:
                  </h4>
                  {exp.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start">
                      <ChevronRight
                        size={16}
                        className={`text-${exp.color}-600 mr-2 mt-1 flex-shrink-0`}
                      />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
